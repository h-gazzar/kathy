export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const { First_Name, Email } = body || {};

    if (!First_Name || !Email) {
      return res.status(400).json({ error: 'Missing First_Name or Email' });
    }

    console.log('Forwarding to Google Script:', { First_Name, Email });

    // Send URL-encoded (Google Sheets prefers this)
    const googleRes = await fetch(
      'https://script.google.com/macros/s/AKfycbxrv9Qyb2OV-zYc0YcChZhcawRqsaQyblNEAq2GyZpoONDZGNQCbx3rVcbVdXxnBeXN3Q/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ First_Name, Email }).toString(),
      }
    );

    const text = await googleRes.text();
    console.log('Google Script Response:', text);

    return res.status(200).json({ result: 'success', googleResponse: text });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to log data', details: error.message });
  }
}
