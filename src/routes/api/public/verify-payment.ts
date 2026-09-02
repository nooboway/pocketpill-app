import { createFileRoute } from "@tanstack/react-router";

type CustomField = { variable_name?: string; value?: string };

export const Route = createFileRoute("/api/public/verify-payment")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const secret = process.env["PAYSTACK_SECRET_KEY"];
        if (!secret) {
          return Response.json({ error: "Payment service is not configured." }, { status: 500 });
        }

        const reference = new URL(request.url).searchParams.get("reference");
        if (!reference) {
          return Response.json({ error: "Missing reference parameter." }, { status: 400 });
        }

        try {
          const response = await fetch(
            `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
            { headers: { Authorization: `Bearer ${secret}` } },
          );

          const data = (await response.json()) as {
            status?: boolean;
            message?: string;
            data?: {
              status: string;
              amount: number;
              currency: string;
              reference: string;
              paid_at?: string;
              customer?: { email?: string };
              metadata?: { custom_fields?: CustomField[] };
            };
          };

          if (!response.ok || !data.status || !data.data) {
            console.error(`Paystack verification failed [${response.status}]:`, data);
            return Response.json(
              { verified: false, error: data.message || "Verification failed." },
              { status: 400 },
            );
          }

          const tx = data.data;
          return Response.json({
            verified: tx.status === "success",
            status: tx.status,
            amount: tx.amount / 100,
            currency: tx.currency,
            reference: tx.reference,
            email: tx.customer?.email ?? "",
            plan:
              tx.metadata?.custom_fields?.find((f) => f.variable_name === "selected_plan")?.value ??
              "",
            paid_at: tx.paid_at ?? null,
          });
        } catch (error) {
          console.error("Error verifying payment:", error);
          return Response.json({ error: "An error occurred during verification." }, { status: 500 });
        }
      },
    },
  },
});
