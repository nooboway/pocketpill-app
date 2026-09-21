import test from "node:test";
import assert from "node:assert/strict";
import { handleLineageRequest, lineageEmailText } from "../src/server-fns/lineage-email.ts";

const data = {
  yourName: "Test Sponsor",
  yourWhatsApp: "08000000000",
  yourEmail: "test@example.com",
  parentName: "Test Parent",
  city: "Ikeja",
  caregiverName: "Test Carer",
  caregiverPhone: "08000000001",
  knownMedicines: "Test medicine",
  readyToFund: false,
  prescriptionReady: true as const,
  consent: true as const,
  website: "",
};
function request(payload: unknown = data, origin = "https://pocketpill.co") {
  return new Request("https://pocketpill.co/api/public/lineage-request", {
    method: "POST",
    headers: { origin, "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
}
test("only reports success after mail acceptance; no health details in response", async () => {
  let calls = 0;
  const response = await handleLineageRequest(request(), {
    configured: () => true,
    allow: () => true,
    send: async (validated) => {
      calls++;
      assert.equal(validated.parentName, data.parentName);
      return true;
    },
  });
  assert.equal(calls, 1);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.match(lineageEmailText(data), /Test medicine/);
});
test("missing configuration, untrusted origins and invalid input never send", async () => {
  const deps = {
    configured: () => true,
    allow: () => true,
    send: async () => {
      throw new Error("Must not send");
    },
  };
  assert.equal(
    (await handleLineageRequest(request(), { ...deps, configured: () => false })).status,
    503,
  );
  assert.equal(
    (await handleLineageRequest(request(data, "https://other.example"), deps)).status,
    403,
  );
  for (const invalid of [
    { ...data, consent: false },
    { ...data, caregiverPhone: "bad" },
    { ...data, website: "spam" },
    { ...data, yourEmail: "a@example.com\r\nBcc: victim@example.com" },
    { ...data, to: "other@example.com" },
  ]) {
    assert.equal((await handleLineageRequest(request(invalid), deps)).status, 400);
  }
  assert.equal(
    (await handleLineageRequest(request({ ...data, knownMedicines: "x".repeat(13_000) }), deps))
      .status,
    413,
  );
  assert.equal(
    (await handleLineageRequest(request(), { ...deps, allow: () => false })).status,
    429,
  );
});
test("mail rejection and SMTP exceptions cannot produce a success receipt or leak errors", async () => {
  for (const send of [
    async () => false,
    async () => {
      throw new Error("private SMTP details");
    },
  ]) {
    const response = await handleLineageRequest(request(), {
      configured: () => true,
      allow: () => true,
      send,
    });
    assert.equal(response.status, 502);
    const body = await response.text();
    assert.doesNotMatch(body, /private SMTP|Test Parent|success/);
  }
});
