import { useState } from 'react'
import Header from './Header.jsx'
import VideoPlayer from './VideoPlayer.jsx'

function App() {
  return (
    <div className='main'>
      <div className="inner-constructor">
        <div className="background-wrapper">
          <div className='top-bg'>
            <div className='logo-wrapper'>
              <img className='logo-circle' src='/logo_circle.svg' alt='logo' />
            </div>
          </div>

          <div className="brand-section">
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

          <VideoPlayer />
          <h1></h1>
        </div>
      </div>
    </div>
  );
}

export default App;
