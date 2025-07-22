import { useRef, useState, useEffect } from 'react';
import videoFile from '/0715.mp4';

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Update progress bar as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent || 0);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
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
      <div className="videoControls">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <div className="buttons">
          <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        </div>
      </div>
    </div>
  );
}
export default VideoPlayer;