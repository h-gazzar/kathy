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
                  href="https://freelancescaler.org/vsl?fbclid=PAQ0xDSwLvScRleHRuA2FlbQIxMAABp6jBjLZTORbe9AgHrGdRfrkSfMMB-6oylobuqhZblmdnx-3kEduMkP5SvkM1_aem_5vv1l7AxEalLKYk3OdQA9g" 
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


         {/* Reviews block floats in */}
        <div className="reviews float-up delay-4">
          {/* Review 1 */}
          <div className="review-item">
            <div className="review-header">
              <img src="path_to_image/jane_doe_image.jpg" alt="Jane Doe" className="reviewer-image" />
              <span>Jane Doe</span>
            </div>
            <div className="review-content">
              <p>
                "I had the absolute pleasure of working with Dr. Kathy to help jumpstart my healing journey..."
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="review-item">
            <div className="review-header">
              <img src="path_to_image/mark_johnson_image.jpg" alt="Mark Johnson" className="reviewer-image" />
              <span>Mark Johnson</span>
            </div>
            <div className="review-content">
              <p>
                "I'm so grateful I found Dr. Kathy! I had worked with several practitioners in the past..."
              </p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="review-item">
            <div className="review-header">
              <img src="path_to_image/emily_carter_image.jpg" alt="Emily Carter" className="reviewer-image" />
              <span>Emily Carter</span>
            </div>
            <div className="review-content">
              <p>
                "Where do I even begin? After years of bouncing from doctor to doctor..."
              </p>
            </div>
          </div>

          {/* Review 4 */}
          <div className="review-item">
            <div className="review-header">
              <img src="path_to_image/sophia_martinez_image.jpg" alt="Sophia Martinez" className="reviewer-image" />
              <span>Sophia Martinez</span>
            </div>
            <div className="review-content">
              <p>
                "It's been an honor to work with Dr. Kathy over the past few months..."
              </p>
            </div>
          </div>

          {/* Review 5 */}
          <div className="review-item">
            <div className="review-header">
              <img src="path_to_image/bob_gomez_image.jpg" alt="Bob Gomez" className="reviewer-image" />
              <span>Bob Gomez</span>
            </div>
            <div className="review-content">
              <p>
                "My time with Dr. Kathy has been nothing but extraordinary..."
              </p>
            </div>
          </div>

          {/* Review 6 */}
          <div className="review-item">
            <div className="review-header">
              <img src="path_to_image/david_lee_image.jpg" alt="David Lee" className="reviewer-image" />
              <span>David Lee</span>
            </div>
            <div className="review-content">
              <p>
                "Unlike a lot of traditional doctors, Dr. Kathy actually takes the time to listen..."
              </p>
            </div>
          </div>
        </div>

        <div className="apply-now-container">
                <a 
                  href="https://freelancescaler.org/vsl?fbclid=PAQ0xDSwLvScRleHRuA2FlbQIxMAABp6jBjLZTORbe9AgHrGdRfrkSfMMB-6oylobuqhZblmdnx-3kEduMkP5SvkM1_aem_5vv1l7AxEalLKYk3OdQA9g" 
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
