// Vercel Serverless Function: Verify a Paystack transaction
// GET /api/verify-payment?reference=xxx

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
  if (!PAYSTACK_SECRET_KEY) {
    console.error("PAYSTACK_SECRET_KEY is not set.");
    return res.status(500).json({ error: "Payment service is not configured." });
  }

  const { reference } = req.query;

  if (!reference) {
    return res.status(400).json({ error: "Missing reference parameter." });
  }

  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    });

    const data = await response.json();

    if (!data.status) {
      return res.status(400).json({
        verified: false,
        error: data.message || "Verification failed.",
      });
    }

    const transaction = data.data;

    return res.status(200).json({
      verified: transaction.status === "success",
      status: transaction.status,
      amount: transaction.amount / 100, // Convert back from kobo to Naira
      currency: transaction.currency,
      reference: transaction.reference,
      email: transaction.customer?.email || "",
      plan: transaction.metadata?.custom_fields?.find(
        (f) => f.variable_name === "selected_plan"
      )?.value || "",
      paid_at: transaction.paid_at,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res.status(500).json({ error: "An error occurred during verification." });
  }
}
