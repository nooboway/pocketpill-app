import assert from "node:assert/strict";
import { test } from "node:test";
import { CARE_WHATSAPP_URL, isValidPhone, requestSummary } from "../src/lib/care-request.ts";

test("WhatsApp destination contains no draft, contact, or health information", () => {
  const url = new URL(CARE_WHATSAPP_URL);
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/2347083725382");
  assert.equal(url.search, "");
  assert.equal(url.hash, "");
});

test("summary retains care details and explicit choices without empty optional fields", () => {
  const summary = requestSummary("Test request", {
    Medicine: "  Test medicine  ",
    Name: "  ",
    Permission: true,
    Funding: false,
  });
  assert.equal(summary, "Test request\nMedicine: Test medicine\nPermission: Yes\nFunding: No");
});

test("phone validation accepts local and international formats and rejects malformed values", () => {
  for (const value of ["08012345678", "+234 708 372 5382", "+1 (202) 555-0123"]) {
    assert.equal(isValidPhone(value), true, value);
  }
  for (const value of [
    "",
    "    ",
    "123",
    "abc08012345678",
    "1234567890123456",
    "++2347083725382",
    "234+7083725382",
  ]) {
    assert.equal(isValidPhone(value), false, value);
  }
});
