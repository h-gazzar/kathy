import { useState } from 'react'
import Header from './Header.jsx'
import VideoPlayer from './VideoPlayer.jsx'
import SubscribeSection from './SubscribeSection';

function App() {
  return (
    <div className='main'>
      {/* Main container floats in first */}
      <div className="inner-constructor float-up delay-0">
        <div className="background-wrapper">
          <div className='top-bg'>
            <div className='logo-wrapper'>
              <img className='logo-circle' src='/logo_circle.svg' alt='logo' />
            </div>
          </div>

          {/* Brand section floats next */}
          <div className="brand-section float-up delay-1">
            <h3 className="brand-name">RootCauseReset_placeholder</h3>

            <div className="social-group">
              <div className="social-item">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons8-instagram-24.svg" alt="Instagram" />
                </a>
                <p className="icon-credit">
                  <a target="_blank" href="https://icons8.com/icon/118497/instagram">Instagram</a> icon by 
                  <a target="_blank" href="https://icons8.com"> Icons8</a>
                </p>
              </div>

              <div className="social-item">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons8-facebook-50.svg" alt="Facebook" />
                </a>
                <p className="icon-credit">
                  <a target="_blank" href="https://icons8.com/icon/118502/facebook">Facebook</a> icon by 
                  <a target="_blank" href="https://icons8.com"> Icons8</a>
                </p>
              </div>

              <div className="social-item">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons8-x-24.svg" alt="X" />
                </a>
                <p className="icon-credit">
                  <a target="_blank" href="https://icons8.com/icon/CmhVg6wmHTH8/x">X</a> icon by 
                  <a target="_blank" href="https://icons8.com"> Icons8</a>
                </p>
              </div>
            </div>
          </div>


            <div className="float-up delay-2">
              <VideoPlayer />

              <div className="apply-now-container">
                <a 
                  href="https://mpbkvumhf2a.typeform.com/to/G8ROnnlL?fbclid=PAQ0xDSwLvSaZleHRuA2FlbQIxMQABp1UC4wFLA2EI85mJHU_YnrsfgyVWZqbRuYcI9ZgEN8DtjN0FTRi5XEtrepZr_aem_CFOW7eOtNmtvsi5koMrCOQ&typeform-source=l.instagram.com" 
                  className="apply-now-btn"
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* Separator and heading float in */}
            <div className='seperator float-up delay-3'></div>
            <h4 className="float-up delay-3">
              If the video wasn’t enough, take it from my patients:
            </h4>

                        <div className="vertical-image-section float-up delay-3">
              {/* Top 3 stacked images */}
              <img src="/WhatsApp Image 2025-07-13 at 2.20.02 PM.jpeg" alt="/public/WhatsApp Image 2025-07-13 at 2.20.02 PM.jpeg" className="vertical-image" />
              <img src="/WhatsApp Image 2025-07-13 at 2.20.03 PM (1).jpeg" alt="Image 2" className="vertical-image" />
              <img src="/WhatsApp Image 2025-07-13 at 2.20.03 PM (2).jpeg" alt="Image 3" className="vertical-image" />

              {/* Centered Text Block */}
              <div className="image-text-block">
                <h4 className="vertical-section-heading">Root Cause Reset is a 12-Week program & 1-on-1 That Helps Women:</h4>
                <ul className="vertical-section-list">
                  <li>Balance</li>
                  <li>Restore</li>
                  <li>Debloat</li>
                  <li>Nourish</li>
                  <li>Reset</li>
                  <li>Thrive</li>
                </ul>
              </div>

              {/* Bottom 3 stacked images */}
              <img src="/WhatsApp Image 2025-07-13 at 2.20.03 PM (3).jpeg" alt="Image 4" className="vertical-image" />
              <img src="/WhatsApp Image 2025-07-13 at 2.20.03 PM (4).jpeg" alt="Image 5" className="vertical-image" />
              <img src="/WhatsApp Image 2025-07-13 at 2.20.03 PM.jpeg" alt="Image 6" className="vertical-image" />
            </div>

        <div className="apply-now-container">
                <a 
                  href="https://mpbkvumhf2a.typeform.com/to/G8ROnnlL?fbclid=PAQ0xDSwLvSaZleHRuA2FlbQIxMQABp1UC4wFLA2EI85mJHU_YnrsfgyVWZqbRuYcI9ZgEN8DtjN0FTRi5XEtrepZr_aem_CFOW7eOtNmtvsi5koMrCOQ&typeform-source=l.instagram.com" 
                  className="apply-now-btn"
                >
                  Apply Now
                </a>
              </div>

          {/* Subscribe Section floats last */}
          <div className="sections float-up delay-5">
            <SubscribeSection />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
