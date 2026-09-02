import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  amount: z.number().positive(),
  plan: z.string().min(1),
});

export const Route = createFileRoute("/api/public/initialize-payment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env["PAYSTACK_SECRET_KEY"];
        if (!secret) {
          return Response.json({ error: "Payment service is not configured." }, { status: 500 });
        }

        const parsed = bodySchema.safeParse(await request.json().catch(() => null));
        if (!parsed.success) {
          return Response.json({ error: "Invalid request body." }, { status: 400 });
        }
        const { email, amount, plan } = parsed.data;

        const origin = new URL(request.url).origin;

        try {
          const response = await fetch("https://api.paystack.co/transaction/initialize", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${secret}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              amount: Math.round(amount * 100), // Paystack expects kobo
              currency: "NGN",
              callback_url: `${process.env["SITE_URL"] || origin}/payment/success`,
              metadata: {
                custom_fields: [
                  { display_name: "Selected Plan", variable_name: "selected_plan", value: plan },
                ],
              },
            }),
          });

          const data = (await response.json()) as {
            status?: boolean;
            message?: string;
            data?: { authorization_url: string; access_code: string; reference: string };
          };

          if (!response.ok || !data.status || !data.data) {
            console.error(`Paystack initialization failed [${response.status}]:`, data);
            return Response.json(
              { error: data.message || "Payment initialization failed." },
              { status: 400 },
            );
          }

          return Response.json({
            authorization_url: data.data.authorization_url,
            access_code: data.data.access_code,
            reference: data.data.reference,
          });
        } catch (error) {
          console.error("Error initializing payment:", error);
          return Response.json(
            { error: "An error occurred while initializing the payment." },
            { status: 500 },
          );
        }
      },
    },
  },
});
