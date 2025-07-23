import { useState } from 'react'
import Header from './Header.jsx'
import VideoPlayer from './VideoPlayer.jsx'
import SubscribeSection from './SubscribeSection';


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
          <div className='seperator'>
          </div>
          <h4>If the video wasn’t enough, take it from my patients:</h4>
          <div className="reviews">
          <div className="review-item">
            <div className="review-header" onClick={(e) => {
              const item = e.currentTarget.parentElement;
              item.classList.toggle('active');
            }}>
              <span>Jane Doe</span>
              <span className="accordion-icon">+</span>
            </div>
            <div className="review-content">
              <p>
                "I had the absolute pleasure of working with Dr. Kathy to help jumpstart my healing journey. From the very beginning, Dr Kathy took the time to really understand all of my health challenges, diet & lifestyle, and symptoms I was experiencing. Every time we met I could tell she genuinely cared about helping me feel better. In just 3 months, I was able to significantly improve many of my symptoms and feel so much better! She always came prepared to our meetings, was available to all of my questions throughout, and gave me a customized approach to healing to ensure all of my needs were met and it fit within my lifestyle. I cannot recommend Kathy enough! She truly is incredible for the work that she does and pours so much love into the work she does. So thankful for my time spent working with her!!"
              </p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="review-item">
            <div className="review-header" onClick={(e) => {
              const item = e.currentTarget.parentElement;
              item.classList.toggle('active');
            }}>
              <span>Mark Johnson</span>
              <span className="accordion-icon">+</span>
            </div>
            <div className="review-content">
              <p>
                "I'm so grateful I found Dr. Kathy! I had worked with several practitioners in the past and saw some improvement, but I was still struggling with fatigue, low energy, poor sleep, and weight gain. After running an HTMA test with Dr. Kathy, she created a personalized supplement protocol along with a customized macro and nutrition plan. Within just a few months, I noticed a huge difference - I have significantly more energy (the afternoon slumps are rare now vs. the norm), I'm sleeping much better, and I've lost around 10 pounds. I honestly can't remember the last time I felt this good! Dr. Kathy offers truly personalized, one-on-one care, and her deep knowledge and compassion shine through in every zoom call and message. I highly recommend working with her, and I absolutely plan to work with her again for any future functional lab needs!"
              </p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="review-item">
            <div className="review-header" onClick={(e) => {
              const item = e.currentTarget.parentElement;
              item.classList.toggle('active');
            }}>
              <span>Emily Carter</span>
              <span className="accordion-icon">+</span>
            </div>
            <div className="review-content">
              <p>
                "Where do I even begin? After years of bouncing from doctor to doctor, feeling unheard, dismissed, and exhausted, I finally found Dr. Kathy and everything changed. She was the only practitioner who truly got to the root of my symptoms and actually helped me heal. She provided in-depth testing and a personalized protocol, which was very eye opening to see what was going on inside my body after being told "everything looks normal" by other doctors, but she reassured me that I was in the right hands. Dr. Kathy helped me transform my health from the inside out. I no longer deal with
                  menstrual cramps, bloating, fatigue, disordered eating, or weight loss issues that used to control my life. What stands out the most, is her heart. She thinks outside the box and brings so much compassion, patience, and deep care to every single call. You can feel her love and dedication with each interaction which is very rare in the medical field. Working with her has been the greatest investment I've ever made in myself. If you're on the fence, make the investment, it's worth it. &lt;3 "
              </p>
            </div>
          </div>

          {/* Review 4 */}
          <div className="review-item">
            <div className="review-header" onClick={(e) => {
              const item = e.currentTarget.parentElement;
              item.classList.toggle('active');
            }}>
              <span>Sophia Martinez</span>
              <span className="accordion-icon">+</span>
            </div>
            <div className="review-content">
              <p>
                "It's been an honor to work with Dr. Kathy over the past few months. She is the most attentive, caring, and knowledgeable doctor I've ever worked with. I was desperately looking to heal my hormones after years of running from doctor to doctor. Dr. Kathy confirmed my symptoms were valid through her testing and once I started her protocol, my life made a 180 turn for the better. I've lost weight, I no longer experience fatigue, menstrual cramps, anxiety and my outlook on life is so much more positive. I can't thank Dr. Kathy enough for walking me through this journey hand in hand. I would recommend her for anyone trying to get their lives back!"
              </p>
            </div>
          </div>

           {/* Review 5 */}
           <div className="review-item">
            <div className="review-header" onClick={(e) => {
              const item = e.currentTarget.parentElement;
              item.classList.toggle('active');
            }}>
              <span>Bob Gomez</span>
              <span className="accordion-icon">+</span>
            </div>
            <div className="review-content">
              <p>
                "My time with Dr. Kathy has been nothing but extraordinary. She really took the time to listen to my concerns and created a customized plan to get me better. During the time we worked together, I've lost weight, my period is now regular and pain free, my energy has dramatically improved, and my skin has cleared up. These are concerns I struggled with for years, but through Dr. Kathy's testing and root cause approach, I was able to quickly resolve my symptoms. I can't recommend her enough for anyone looking to take the leap and invest into their health!"
              </p>
            </div>
          </div>

          {/* Review 6 */}
          <div className="review-item">
            <div className="review-header" onClick={(e) => {
              const item = e.currentTarget.parentElement;
              item.classList.toggle('active');
            }}>
              <span>David Lee</span>
              <span className="accordion-icon">+</span>
            </div>
            <div className="review-content">
              <p>
                "Unlike a lot of traditional doctors, Dr. Kathy actually takes the time to listen to your concerns and develops a plan to attack each and every one. Over the time we worked together, she has fixed my chronic abdominal pain, acid reflux issues, and helped me slim down! I'm also sleeping better and getting my menstrual cycle back on track with pain-free periods! Besides the physical aspect, she had provided a multitude of ways to help my mental health on my journey to healing my body. Dr. Kathy truly cares about you as the person, not as just the "patient." It is clear with every check-in session that she only wants what's best for you. If you're tired of regular doctors giving you the run around, and want to heal your body naturally, then Dr. Kathy is the doctor for you!!"
              </p>
            </div>
          </div>
        </div>


        <div className="sections">
            <SubscribeSection />
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
