// Vercel Serverless Function: Paystack Webhook Listener
// POST /api/webhooks/paystack
// Paystack sends events here when payments succeed, fail, etc.

const crypto = require("crypto");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
  if (!PAYSTACK_SECRET_KEY) {
    console.error("PAYSTACK_SECRET_KEY is not set.");
    return res.status(500).json({ error: "Webhook not configured." });
  }

  // Step 1: Verify the webhook signature
  // Paystack signs every webhook with your secret key using HMAC SHA-512
  const signature = req.headers["x-paystack-signature"];
  const body = JSON.stringify(req.body);
  const hash = crypto
    .createHmac("sha512", PAYSTACK_SECRET_KEY)
    .update(body)
    .digest("hex");

  if (hash !== signature) {
    console.warn("Webhook signature verification failed.");
    return res.status(401).json({ error: "Invalid signature." });
  }

  // Step 2: Process the event
  const event = req.body;

  switch (event.event) {
    case "charge.success": {
      const transaction = event.data;
      const plan = transaction.metadata?.custom_fields?.find(
        (f) => f.variable_name === "selected_plan"
      )?.value;

      console.log("=== PAYMENT SUCCESS ===");
      console.log(`Reference: ${transaction.reference}`);
      console.log(`Email: ${transaction.customer?.email}`);
      console.log(`Amount: ₦${transaction.amount / 100}`);
      console.log(`Plan: ${plan || "Unknown"}`);
      console.log(`Paid at: ${transaction.paid_at}`);
      console.log("========================");

      // TODO: Future enhancements
      // 1. Save to a database (e.g., Supabase, Firebase, Neon)
      // 2. Send a confirmation email via Resend or SendGrid
      // 3. Trigger a WhatsApp notification via the WhatsApp Business API
      // 4. Update an admin dashboard

      // For now, you can monitor these in Vercel's Function Logs
      break;
    }

    case "transfer.success":
      console.log("Transfer successful:", event.data.reference);
      break;

    case "transfer.failed":
      console.log("Transfer failed:", event.data.reference);
      break;

    default:
      console.log(`Unhandled Paystack event: ${event.event}`);
  }

  // Step 3: Always return 200 to acknowledge receipt
  // If you don't return 200, Paystack will keep retrying the webhook
  return res.status(200).json({ received: true });
}
