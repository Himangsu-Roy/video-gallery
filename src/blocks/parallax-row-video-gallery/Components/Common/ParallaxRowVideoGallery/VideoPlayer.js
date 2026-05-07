import { useRef, useEffect, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const VideoPlayer = ({
  video,
  poster,
  title,
  subtitle,
  isPlaying,
  onPlay,
  onPause,
  index,
  setActiveIndex = () => {},
}) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.muted = isMuted;
      video.play().catch((err) => console.log("Play error:", err));
    } else {
      video.pause();
    }
  }, [isPlaying, isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("ended", onPause);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("ended", onPause);
    };
  }, [onPause]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
      setIsMuted(false);
    }
    setActiveIndex(index);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen().catch((err) => {
        console.log("Error attempting fullscreen:", err);
      });
    }
  };

  const handleProgressClick = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    video.currentTime = newTime;
  };

  return (
    <div
      className={`video-player ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => handleClick(e)}>
      {isLoading && (
        <div className="vgb-loading-overlay">
          <div className="vgb-spinner"></div>
        </div>
      )}
      <video
        key={video}
        ref={videoRef}
        className="video-element"
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        onLoadStart={() => setIsLoading(true)}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onPlaying={() => setIsLoading(false)}>
        <source src={video} type="video/mp4" />
      </video>

      <div className="video-gradient" />

      <div className={`overlay ${isHovered || !isPlaying ? "visible" : ""}`}>
        <div className="overlay-center">
          <div className="play-button">
            {isPlaying ? (
              <Pause className="icon" />
            ) : (
              <Play className="icon play-offset" />
            )}
          </div>
        </div>
      </div>

      <div className={`info ${isPlaying ? "hidden" : "visible"}`}>
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
      </div>

      {isPlaying && (
        <>
          <div className="controls">
            <button
              onClick={toggleFullscreen}
              className="control-button"
              title="Fullscreen">
              <Maximize className="icon-small" />
            </button>
            <button
              onClick={toggleMute}
              className="control-button"
              title={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? (
                <VolumeX className="icon-small" />
              ) : (
                <Volume2 className="icon-small" />
              )}
            </button>
          </div>

          <div className="progress-container" onClick={handleProgressClick}>
            <div className="progress-bg" />
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
