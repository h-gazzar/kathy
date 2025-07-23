import { useRef, useState, useEffect } from 'react';
import videoFile from '/0715.mp4';

// Icons (ensure they are in your public folder with correct names)
import playIcon from '/play-svgrepo-com.svg';
import pauseIcon from '/pause-svgrepo-com.svg';
import muteIcon from '/sound-off-filled-svgrepo-com.svg';
import unmuteIcon from '/sound-loud-svgrepo-com (1).svg';

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Update progress bar dynamically
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent || 0);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div className="videoWrapper">
      <video
        ref={videoRef}
        src={videoFile}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />
      {/* Progress bar at top */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
        className="progressBar"
      />
      {/* Overlayed buttons */}
      <div className="videoButtons">
        <button onClick={togglePlay} className="iconButton">
          <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" />
        </button>
        <button onClick={toggleMute} className="iconButton">
          <img src={isMuted ? unmuteIcon : muteIcon} alt="Mute/Unmute" />
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
