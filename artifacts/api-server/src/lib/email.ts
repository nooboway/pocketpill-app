import { Resend } from "resend";
import { logger } from "./logger";
import type { SiteSettingsData } from "@workspace/db";
import type { Booking } from "@workspace/db";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_ADDRESS = "Pocketpill <notifications@pocketpill.health>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "hello@pocketpill.health";

function getResend(): Resend | null {
  if (!RESEND_API_KEY) {
    logger.warn("RESEND_API_KEY not set — email sending disabled");
    return null;
  }
  return new Resend(RESEND_API_KEY);
}

function baseWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pocketpill</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:'Georgia',serif;color:#e8ddd0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0d0d0d;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" style="max-width:560px;">
          <!-- Logo -->
          <tr>
            <td style="padding-bottom:32px;">
              <span style="font-size:22px;font-weight:400;color:#e8ddd0;letter-spacing:-0.5px;">Pocket<em style="color:#c1440e;font-style:italic;">pill</em></span>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="background:#161616;border:1px solid #2a2a2a;border-radius:4px;padding:36px 32px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;font-size:12px;color:#555;line-height:1.6;">
              Pocketpill · Private Men's Health · West Africa &amp; Diaspora<br/>
              This is a transactional message. Please do not reply to this email.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Booking confirmation to client ──────────────────────────────────────────

export async function sendBookingConfirmation(
  booking: Booking,
  settings: SiteSettingsData,
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const appointmentLine =
    booking.appointmentDate && booking.appointmentTime
      ? `<tr><td style="padding:6px 0;color:#888;font-size:13px;">Appointment</td><td style="padding:6px 0;font-size:13px;">${booking.appointmentDate} at ${booking.appointmentTime}</td></tr>`
      : "";

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/\D/g, "")}`;

  const html = baseWrapper(`
    <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#c1440e;">Booking Confirmed</p>
    <h1 style="margin:0 0 24px;font-size:24px;font-weight:400;color:#e8ddd0;line-height:1.3;">
      You're booked in,<br/>${booking.clientName.split(" ")[0]}.
    </h1>
    <p style="margin:0 0 24px;font-size:15px;color:#aaa;line-height:1.7;">
      Your consultation has been received. A pharmacist will reach out to you on WhatsApp within 24 hours to confirm your session.
    </p>

    <!-- Booking summary -->
    <table role="presentation" width="100%" style="border-top:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a;margin-bottom:28px;">
      <tr><td style="padding:6px 0;color:#888;font-size:13px;">Reference</td><td style="padding:6px 0;font-size:13px;font-family:monospace;color:#c1440e;">${booking.reference}</td></tr>
      <tr><td style="padding:6px 0;color:#888;font-size:13px;">Plan</td><td style="padding:6px 0;font-size:13px;">${booking.planName}</td></tr>
      <tr><td style="padding:6px 0;color:#888;font-size:13px;">Amount</td><td style="padding:6px 0;font-size:13px;">${booking.planPrice}</td></tr>
      ${appointmentLine}
      <tr><td style="padding:6px 0;color:#888;font-size:13px;">WhatsApp</td><td style="padding:6px 0;font-size:13px;">${booking.clientWhatsapp}</td></tr>
    </table>

    <a href="${whatsappUrl}" style="display:inline-block;background:#c1440e;color:#fff;text-decoration:none;padding:14px 28px;font-size:14px;letter-spacing:1px;border-radius:2px;">
      MESSAGE US ON WHATSAPP →
    </a>

    <p style="margin:28px 0 0;font-size:13px;color:#666;line-height:1.7;">
      All consultations are private and confidential. Your information is never shared.
    </p>
  `);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: booking.clientEmail,
      subject: `Booking confirmed · ${booking.reference} · Pocketpill`,
      html,
    });
    logger.info({ ref: booking.reference, to: booking.clientEmail }, "Booking confirmation sent");
  } catch (err) {
    logger.error({ err, ref: booking.reference }, "Failed to send booking confirmation");
  }
}

// ─── Admin notification for new booking ──────────────────────────────────────

export async function sendBookingAdminAlert(booking: Booking): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const appointmentLine =
    booking.appointmentDate && booking.appointmentTime
      ? `<tr><td style="padding:4px 0;color:#888;font-size:13px;">Appointment</td><td style="padding:4px 0;font-size:13px;">${booking.appointmentDate} at ${booking.appointmentTime}</td></tr>`
      : "";

  const html = baseWrapper(`
    <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#c1440e;">New Booking</p>
    <h1 style="margin:0 0 24px;font-size:22px;font-weight:400;color:#e8ddd0;">
      ${booking.clientName}
    </h1>

    <table role="presentation" width="100%" style="border-top:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a;margin-bottom:24px;">
      <tr><td style="padding:5px 0;color:#888;font-size:13px;width:120px;">Reference</td><td style="padding:5px 0;font-size:13px;font-family:monospace;color:#c1440e;">${booking.reference}</td></tr>
      <tr><td style="padding:5px 0;color:#888;font-size:13px;">Plan</td><td style="padding:5px 0;font-size:13px;">${booking.planName} · ${booking.planPrice}</td></tr>
      <tr><td style="padding:5px 0;color:#888;font-size:13px;">Email</td><td style="padding:5px 0;font-size:13px;">${booking.clientEmail}</td></tr>
      <tr><td style="padding:5px 0;color:#888;font-size:13px;">WhatsApp</td><td style="padding:5px 0;font-size:13px;">${booking.clientWhatsapp}</td></tr>
      ${appointmentLine}
    </table>

    <p style="margin:0 0 8px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;">Concern</p>
    <p style="margin:0 0 24px;font-size:14px;color:#bbb;line-height:1.7;background:#1a1a1a;padding:14px 16px;border-left:2px solid #c1440e;">
      ${booking.concern.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
    </p>

    <a href="https://wa.me/${booking.clientWhatsapp.replace(/\D/g, "")}" style="display:inline-block;background:#c1440e;color:#fff;text-decoration:none;padding:12px 24px;font-size:13px;letter-spacing:1px;border-radius:2px;">
      OPEN WHATSAPP →
    </a>
  `);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: ADMIN_EMAIL,
      subject: `New booking · ${booking.reference} · ${booking.planName}`,
      html,
    });
    logger.info({ ref: booking.reference }, "Admin booking alert sent");
  } catch (err) {
    logger.error({ err, ref: booking.reference }, "Failed to send admin booking alert");
  }
}

// ─── Newsletter welcome to subscriber ────────────────────────────────────────

export async function sendNewsletterWelcome(
  email: string,
  name: string | null | undefined,
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const greeting = name ? `Hi ${name.split(" ")[0]},` : "Hello,";

  const html = baseWrapper(`
    <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#c1440e;">You're in.</p>
    <h1 style="margin:0 0 20px;font-size:24px;font-weight:400;color:#e8ddd0;line-height:1.3;">
      ${greeting}<br/>Welcome to Pocketpill.
    </h1>
    <p style="margin:0 0 16px;font-size:15px;color:#aaa;line-height:1.8;">
      You've joined a private list of men across West Africa and the diaspora who are taking their health seriously — quietly, on their own terms.
    </p>
    <p style="margin:0 0 28px;font-size:15px;color:#aaa;line-height:1.8;">
      We'll send occasional updates on men's health, treatment options, and when new consultation slots open. No spam. No nonsense.
    </p>
    <a href="https://pocketpill.health/book" style="display:inline-block;background:#c1440e;color:#fff;text-decoration:none;padding:14px 28px;font-size:14px;letter-spacing:1px;border-radius:2px;">
      BOOK A CONSULTATION →
    </a>
    <p style="margin:28px 0 0;font-size:12px;color:#555;line-height:1.7;">
      You subscribed at pocketpill.health. If this was a mistake, simply ignore this email — you won't hear from us unless you re-subscribe.
    </p>
  `);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "Welcome to Pocketpill",
      html,
    });
    logger.info({ to: email }, "Newsletter welcome sent");
  } catch (err) {
    logger.error({ err, to: email }, "Failed to send newsletter welcome");
  }
}

// ─── Admin notification for new subscriber ───────────────────────────────────

export async function sendNewsletterAdminAlert(
  email: string,
  name: string | null | undefined,
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const html = baseWrapper(`
    <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#c1440e;">New Subscriber</p>
    <h1 style="margin:0 0 20px;font-size:22px;font-weight:400;color:#e8ddd0;">
      ${name ?? "Anonymous"}
    </h1>
    <table role="presentation" width="100%" style="border-top:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a;">
      <tr><td style="padding:6px 0;color:#888;font-size:13px;width:80px;">Email</td><td style="padding:6px 0;font-size:13px;">${email}</td></tr>
      ${name ? `<tr><td style="padding:6px 0;color:#888;font-size:13px;">Name</td><td style="padding:6px 0;font-size:13px;">${name}</td></tr>` : ""}
    </table>
  `);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: ADMIN_EMAIL,
      subject: `New subscriber · ${email}`,
      html,
    });
    logger.info({ to: email }, "Admin subscriber alert sent");
  } catch (err) {
    logger.error({ err, to: email }, "Failed to send admin subscriber alert");
  }
}
