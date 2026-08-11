export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, amount, metadata } = req.body;
  const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

  if (!PAYSTACK_SECRET_KEY) {
    return res.status(500).json({ error: 'Paystack secret key is missing in environment variables.' });
  }

  if (!email || !amount) {
    return res.status(400).json({ error: 'Email and amount are required.' });
  }

  try {
    // Call Paystack to initialize the transaction
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount, // amount should be in kobo (e.g., 10000 = 100 NGN)
        metadata,
        callback_url: `${req.headers.origin || 'http://localhost:8080'}/shop?payment=success`, 
      }),
    });

    const data = await response.json();
    
    if (data.status) {
      // Return the checkout URL to the frontend
      return res.status(200).json({ 
        authorization_url: data.data.authorization_url,
        reference: data.data.reference
      });
    } else {
      return res.status(400).json({ error: data.message });
    }
  } catch (error) {
    console.error('Paystack initialization error:', error);
    return res.status(500).json({ error: 'Failed to communicate with Paystack' });
  }
}
