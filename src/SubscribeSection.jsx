import { useState } from 'react';

function SubscribeSection() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      });
      
      
      

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        e.target.reset(); // clear form
      } else {
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
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
        <input type="email" name="email" placeholder="Enter your email" required />
        <input type="tel" name="phone" placeholder="Enter your phone (optional)" />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
      {message && <p className="subscribe-message">{message}</p>}
    </div>
  );
}

export default SubscribeSection;
