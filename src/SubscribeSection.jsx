export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Parse request body safely (Vercel doesn't auto-parse for us)
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { email, phone } = body || {};

    if (!email && !phone) {
      return res.status(400).json({ error: 'Email or phone is required' });
    }

    // Forward to Google Apps Script Web App
    const googleRes = await fetch(
      'https://script.google.com/macros/s/AKfycbxnQ5YXLN4274HJyMHMVvDtMuJazExsNkhI-qrgys9d1BFyc4fw108jTzdEaZYYSWJ2sA/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      }
    );

    const text = await googleRes.text();

    return res.status(200).json({ result: 'success', googleResponse: text });
  } catch (error) {
    console.error('Subscribe API Error:', error);
    return res.status(500).json({
      error: 'Failed to save subscription',
      details: error.message,
    });
  }
}
