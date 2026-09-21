import { createServerFn } from "@tanstack/react-start";

// Legacy callers must not receive a receipt for data that has not been delivered.
export const submitDrugRequest = createServerFn({ method: "POST" }).handler(async () => ({
  success: false,
  message:
    "Online intake is unavailable. Review and send your request in PocketPill’s WhatsApp chat.",
}));
