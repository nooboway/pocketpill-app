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

        const event = JSON.parse(body) as {
          event?: string;
          data?: {
            reference?: string;
            amount?: number;
            paid_at?: string;
            customer?: { email?: string };
            metadata?: { custom_fields?: { variable_name?: string; value?: string }[] };
          };
        };

        switch (event.event) {
          case "charge.success": {
            const tx = event.data ?? {};
            const plan = tx.metadata?.custom_fields?.find(
              (f) => f.variable_name === "selected_plan",
            )?.value;
            console.log("Paystack charge.success", {
              reference: tx.reference,
              email: tx.customer?.email,
              amount: (tx.amount ?? 0) / 100,
              plan: plan ?? "Unknown",
              paid_at: tx.paid_at,
            });
            break;
          }
          default:
            console.log(`Unhandled Paystack event: ${event.event}`);
        }

        return Response.json({ received: true });
      },
    },
  },
});
