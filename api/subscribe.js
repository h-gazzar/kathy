export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    try {
      const { email, phone } = JSON.parse(req.body || '{}');
  
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
  
      res.status(200).json({ result: 'success', googleResponse: text });
    } catch (error) {
      res.status(500).json({ error: 'Failed to log data', details: error.message });
    }
  }
  