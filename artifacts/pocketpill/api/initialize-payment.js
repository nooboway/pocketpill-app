// Vercel Serverless Function: Initialize a Paystack transaction
// POST /api/initialize-payment
// Body: { email: string, amount: number (in Naira), plan: string }

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
  if (!PAYSTACK_SECRET_KEY) {
    console.error("PAYSTACK_SECRET_KEY is not set in environment variables.");
    return res.status(500).json({ error: "Payment service is not configured." });
  }

  const { email, amount, plan } = req.body;

  // Validate required fields
  if (!email || !amount || !plan) {
    return res.status(400).json({ error: "Missing required fields: email, amount, plan" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  if (typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount." });
  }

  try {
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack expects kobo (1 Naira = 100 kobo)
        currency: "NGN",
        callback_url: `${process.env.SITE_URL || "https://pocketpill.co"}/start/success`,
        metadata: {
          custom_fields: [
            {
              display_name: "Selected Plan",
              variable_name: "selected_plan",
              value: plan,
            },
          ],
        },
      }),
    });

    const data = await response.json();

    if (!data.status) {
      console.error("Paystack initialization failed:", data);
      return res.status(400).json({ error: data.message || "Payment initialization failed." });
    }

    // Return the authorization URL and reference to the frontend
    return res.status(200).json({
      authorization_url: data.data.authorization_url,
      access_code: data.data.access_code,
      reference: data.data.reference,
    });
  } catch (error) {
    console.error("Error initializing payment:", error);
    return res.status(500).json({ error: "An error occurred while initializing the payment." });
  }
}
