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
      'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhDBi0R5qpevDQ1jMsjYowdrs8khKD4nAHtd9WAx_kAlp0mDAg1VnSm5NbZOrr1T-fpwVdLijRtVDAInTSo7XvoY6kmPC2fAKF9mVpoX00J0SyMtSSYqI0KrjQTHJ_UR6s3DSBgXNgYLNYgFxTQjmD3W6O9xcCPS4-2nyllZWG2JChOHH7BLlARuDgENGMiiNcN-58CusXL5Gvf7CRI-z1DYYnivzo-S4WjNhlL4mMo35fJFXduoIKpRTMW2twEW06sga14_NKPwSzzEdOvvq4dhykVnneziic8j1aa&lib=MFq039kLL19Mjvyu23Z_FWI3py9AI10j9',
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
