import { useState } from 'react';

function SubscribeSection() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const First_Name = e.target.First_Name.value;
    const Email = e.target.Email.value;

    // Log what we’re about to send
    console.log('Submitting to API:', { First_Name, Email });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ First_Name, Email }), 
      });

      // Log raw response for debugging
      console.log('API Response Status:', response.status);

      if (response.ok) {
        console.log('Subscription success!');
        setMessage("Thank you for subscribing!");
        e.target.reset(); 
      } else {
        console.error('Subscription failed:', await response.text());
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Network error:', error);
      setMessage("Could not connect. Try again later.");
    }
  };

  return (
    <div className="subscribe-section">
      <h2 className="subscribe-heading">Stay Connected</h2>
      <p className="subscribe-text">
        Sign up to get tips on hormones, gut health, and wellness straight to your inbox.
      </p>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input type="text" name="First_Name" placeholder="First Name" required />
        <input type="email" name="Email" placeholder="Enter your email" required />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
      {message && <p className="subscribe-message">{message}</p>}
    </div>
  );
}

export default SubscribeSection;
