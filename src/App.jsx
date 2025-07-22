import { useState } from 'react'
import Header from './Header.jsx'
import VideoPlayer from './VideoPlayer.jsx'



function App() {
 return(
  <div className='main'>
    <div className="inner-constructor">
    <div className="background-wrapper">
        <VideoPlayer />
        <h1></h1>
    </div>
   </div>
  </div>
 );
}

export default App
