import { useRef, useEffect, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  SkipForward,
  SkipBack,
} from "lucide-react";
import { incrementViewCount } from "./VideoMetadata";

export function VideoPlayer({
  video,
  onVideoEnd,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  options,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const controlsTimeoutRef = useRef();
  const viewTrackedRef = useRef(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.load();
    setCurrentTime(0);
    viewTrackedRef.current = false; // Reset view tracking for new video

    const playVideo = async () => {
      if (options?.autoPlay) {
        setIsLoading(true);
        try {
          await videoElement.play();
          setIsPlaying(true);
          setIsLoading(false);
        } catch (error) {
          console.error("Auto-play failed:", error);
          setIsPlaying(false);
          setIsLoading(false);
        }
      } else {
        setIsPlaying(false);
        setIsLoading(false);
      }
    };

    playVideo();
  }, [video.id, options?.autoPlay]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);

      // Track view when video reaches 3 seconds (to avoid counting accidental plays)
      if (!viewTrackedRef.current && videoElement.currentTime >= 3) {
        viewTrackedRef.current = true;
        incrementViewCount(video?.id);
      }
    };

    const handleLoadedMetadata = () => setDuration(videoElement.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      onVideoEnd();
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    videoElement.addEventListener("ended", handleEnded);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, [onVideoEnd, video?.id]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  return (
    <div className="vpg-video-container">
      <div
        className="vpg-video-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}>
        {isLoading && (
          <div className="vgb-loading-overlay">
            <div className="vgb-spinner"></div>
          </div>
        )}
        <video
          key={video?.video}
          ref={videoRef}
          src={video?.video}
          className="vpg-video-element"
          onClick={togglePlay}
          poster={video?.poster}
          onLoadStart={() => setIsLoading(true)}
          onWaiting={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onPlaying={() => setIsLoading(false)}
        />

        {!isPlaying && (
          <div className="vpg-play-overlay-main" onClick={togglePlay}>
            <div className="vpg-play-button-main">
              <Play className="vpg-play-icon-main" fill="currentColor" />
            </div>
          </div>
        )}

        <div
          className={`vpg-controls ${
            showControls ? "vpg-controls-visible" : "vpg-controls-hidden"
          }`}>
          <div className="vpg-controls-inner">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="vpg-progress-bar"
            />

            <div className="vpg-controls-row">
              <div className="vpg-controls-left">
                {hasPrevious && (
                  <button
                    onClick={onPrevious}
                    className="vpg-control-button"
                    title="Previous video">
                    <SkipBack
                      className="vpg-control-icon"
                      fill="currentColor"
                    />
                  </button>
                )}

                <button onClick={togglePlay} className="vpg-control-button">
                  {isPlaying ? (
                    <Pause
                      className="vpg-control-icon-lg"
                      fill="currentColor"
                    />
                  ) : (
                    <Play className="vpg-control-icon-lg" fill="currentColor" />
                  )}
                </button>

                {hasNext && (
                  <button
                    onClick={onNext}
                    className="vpg-control-button"
                    title="Next video">
                    <SkipForward
                      className="vpg-control-icon"
                      fill="currentColor"
                    />
                  </button>
                )}

                <div className="vpg-volume-control">
                  <button onClick={toggleMute} className="vpg-control-button">
                    {isMuted || volume === 0 ? (
                      <VolumeX className="vpg-control-icon" />
                    ) : (
                      <Volume2 className="vpg-control-icon" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="vpg-volume-slider"
                  />
                </div>

                <span className="vpg-time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <button onClick={toggleFullscreen} className="vpg-control-button">
                <Maximize className="vpg-control-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="vpg-video-info">
        <div className="vpg-video-meta-top">
          {options?.category && video?.category && (
            <span className="vpg-category-badge">{video?.category}</span>
          )}
        </div>

        <h1 className="vpg-video-title-main">{video?.title}</h1>

        {video?.description && (
          <p className="vpg-video-description">{video?.description}</p>
        )}
      </div>
    </div>
  );
}
