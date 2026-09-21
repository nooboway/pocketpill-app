import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

export const Route = createFileRoute("/api/public/webhooks/paystack")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env["PAYSTACK_SECRET_KEY"];
        if (!secret) {
          console.error("PAYSTACK_SECRET_KEY is not set.");
          return Response.json({ error: "Webhook not configured." }, { status: 500 });
        }

        const signature = request.headers.get("x-paystack-signature") ?? "";
        const body = await request.text();
        const expected = createHmac("sha512", secret).update(body).digest("hex");

        const sigBuf = Buffer.from(signature);
        const expBuf = Buffer.from(expected);
        if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) {
          console.warn("Paystack webhook signature verification failed.");
          return Response.json({ error: "Invalid signature." }, { status: 401 });
        }

        // Do not write payment metadata, email addresses, or plan details to logs.
        try {
          const event: unknown = JSON.parse(body);
          if (!event || typeof event !== "object") {
            return Response.json({ error: "Invalid event." }, { status: 400 });
          }
        } catch {
          return Response.json({ error: "Invalid event." }, { status: 400 });
        }

        // Receipt only: order reconciliation is not implemented in this source.
        return Response.json({ received: true });
      },
    },
  },
});
