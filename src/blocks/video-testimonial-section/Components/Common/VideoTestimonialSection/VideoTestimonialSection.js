import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

function VideoPlayer({
  video,
  isActive,
  onPlay,
  onPause,
  setActiveIndex = () => {},
  activeIndex,
  index,
  items,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load(); // Force reload to show poster
    }
  }, [video, activeIndex, items, index]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        onPause();
      } else {
        onPlay(video.id);
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipTime = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        Math.min(duration, videoRef.current.currentTime + seconds),
      );
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      onClick={() => setActiveIndex(index)}
      className={`vp-card ${index === activeIndex ? "bPlNowEditing" : ""}`}
      key={`${video.id}-${video.video}`}>
      <div 
        className="vp-video-wrapper"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        {isLoading && (
          <div className="vgb-loading-overlay">
            <div className="vgb-spinner"></div>
          </div>
        )}
        <video
          key={video.video}
          ref={videoRef}
          className="vp-video"
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onClick={() => onPlay(video.id)}
          onLoadStart={() => setIsLoading(true)}
          onWaiting={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onPlaying={() => setIsLoading(false)}
          poster={video.poster}>
          <source src={video.video} type="video/mp4" />
        </video>
        {(isHovering || isPlaying) && (
          <div className="vp-controls-overlay">
            <div className="vp-controls">
              <span
                onClick={() => skipTime(-items?.video?.skipSeconds)}
                className="vp-skip">
                <SkipBack size={20} />
              </span>
              <span
                onClick={() => {
                  togglePlay();
                }}
                className="vp-play-button">
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </span>
              <span
                onClick={() => skipTime(+items?.video?.skipSeconds)}
                className="vp-skip">
                <SkipForward size={20} />
              </span>
              <span className="vp-time">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={progressPercent}
              onChange={handleProgressChange}
              className="vp-progress"
            />
          </div>
        )}
      </div>
      <div className="vp-info">
        <h3 className="vp-title">{video.title}</h3>
        <p className="vp-subtitle">{video.subtitle}</p>
      </div>
    </div>
  );
}

function VideoTestimonialSection({ attributes, setActiveIndex, activeIndex }) {
  const { videos, items } = attributes;
  const [activeVideo, setActiveVideo] = useState(null);
  const handlePlay = (videoId) => setActiveVideo(videoId);
  const handlePause = () => setActiveVideo(null);
  const [instanceId, setInstanceId] = useState("");

  useEffect(() => {
    setInstanceId(Math.random().toString(36).substr(2, 9));
  }, []);

  return (
    <div className="vp-page">
      <div className="vp-container">
        <div className="vp-grid">
          {videos.map((video, index) => (
            <VideoPlayer
              key={
                instanceId
                  ? `${instanceId}-${video?.id}-${videos.length}`
                  : `${video.id}-${videos.length}`
              }
              index={index}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              video={video}
              isActive={activeVideo === video.id}
              onPlay={handlePlay}
              onPause={handlePause}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoTestimonialSection;
