import nodemailer from "nodemailer";
import { z } from "zod";
import { isValidPhone, requestSummary } from "../lib/care-request.ts";

const shortText = z
  .string()
  .trim()
  .min(1)
  .max(200)
  .refine((value) =>
    [...value].every((char) => char.charCodeAt(0) >= 32 && char.charCodeAt(0) !== 127),
  );
const phone = shortText.refine(isValidPhone);
export const lineageSchema = z
  .object({
    yourName: shortText,
    yourWhatsApp: phone,
    yourEmail: z.string().trim().email().max(200),
    parentName: shortText,
    city: shortText,
    caregiverName: shortText,
    caregiverPhone: phone,
    knownMedicines: z.string().trim().max(500),
    readyToFund: z.boolean(),
    prescriptionReady: z.literal(true),
    consent: z.literal(true),
    website: z.string().max(0),
  })
  .strict();

export type LineageRequest = z.infer<typeof lineageSchema>;
export const CARE_EMAIL = "care@pocketpill.co";

export function lineageEmailText(data: LineageRequest) {
  return requestSummary("PocketPill Lineage request", {
    "Your name": data.yourName,
    "Your WhatsApp": data.yourWhatsApp,
    "Your email": data.yourEmail,
    "Parent's name": data.parentName,
    "Parent's city": data.city,
    "Caregiver name": data.caregiverName,
    "Caregiver phone": data.caregiverPhone,
    Medicines: data.knownMedicines,
    "Ready to discuss funding": data.readyToFund,
    "Will provide prescription to pharmacist": data.prescriptionReady,
    "Patient authority and caregiver contact permission confirmed": data.consent,
  });
}

export async function sendLineageEmail(data: LineageRequest): Promise<boolean> {
  const transport = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: { user: CARE_EMAIL, pass: process.env["SMTP_PASSWORD"] },
    tls: { minVersion: "TLSv1.2", rejectUnauthorized: true },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    logger: false,
    debug: false,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  try {
    const result = await transport.sendMail({
      from: { name: "PocketPill Lineage", address: CARE_EMAIL },
      to: CARE_EMAIL,
      replyTo: data.yourEmail,
      subject: "New PocketPill Lineage request",
      text: lineageEmailText(data),
    });
    return result.accepted.some(
      (recipient) => typeof recipient === "string" && recipient.toLowerCase() === CARE_EMAIL,
    );
  } finally {
    transport.close();
  }
}

const respond = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

// Best-effort process-local protection only; configure Vercel WAF before public launch.
let windowStart = 0;
let attempts = 0;
function allowAttempt() {
  const now = Date.now();
  if (now - windowStart > 60_000) {
    windowStart = now;
    attempts = 0;
  }
  attempts += 1;
  return attempts <= 20;
}

export async function handleLineageRequest(
  request: Request,
  dependencies = {
    configured: () => Boolean(process.env["SMTP_PASSWORD"]),
    send: sendLineageEmail,
    allow: allowAttempt,
  },
) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return respond(403, { error: "Please submit this form from the PocketPill website." });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return respond(415, { error: "Invalid request format." });
  }
  if (!dependencies.configured()) {
    return respond(503, {
      error:
        "Online submission is not available yet. Your request has not been sent. Please contact care@pocketpill.co.",
    });
  }
  if (!dependencies.allow()) {
    return respond(429, { error: "Too many requests. Please wait a minute before trying again." });
  }
  const reader = request.body?.getReader();
  if (!reader) return respond(400, { error: "Please complete the form." });
  let body = "";
  let size = 0;
  const decoder = new TextDecoder();
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > 12_000) {
        await reader.cancel();
        return respond(413, { error: "The request is too large." });
      }
      body += decoder.decode(chunk.value, { stream: true });
    }
    body += decoder.decode();
  } catch {
    return respond(400, { error: "Unable to read the request. Please try again." });
  } finally {
    reader.releaseLock();
  }
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return respond(400, { error: "Invalid request format." });
  }
  const parsed = lineageSchema.safeParse(payload);
  if (!parsed.success)
    return respond(400, { error: "Please check the required details and permissions." });
  try {
    if (await dependencies.send(parsed.data)) return respond(200, { success: true });
  } catch {
    // Never log health details, SMTP responses, credentials, or the submitted payload.
  }
  return respond(502, {
    error:
      "We could not confirm email delivery. Contact care@pocketpill.co before resubmitting to avoid a duplicate.",
  });
}
