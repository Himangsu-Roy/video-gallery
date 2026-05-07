import { useState, useRef } from "react";
import Lightbox from "../Lightbox/Lightbox";

const MasonryGrid1 = ({
  attributes,
  activeIndex,
  setActiveIndex = () => {},
}) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxVideo, setLightboxVideo] = useState(null);
  const [durations, setDurations] = useState({});
  const [activeVideoLoaded, setActiveVideoLoaded] = useState({});
  const videoRefs = useRef({});
  const { videos, items } = attributes;

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex]?.pause();
      }
      video.play();
      setPlayingIndex(index);
    }
  };

  const handleCardClick = (video, index) => {
    if (items?.lightbox?.enabled) {
      setLightboxVideo(video);
      setLightboxOpen(true);
    } else {
      handlePlayPause(index);
    }
  };

  // Video duration calculation
  const handleLoadedMetadata = (index) => {
    const videoElement = videoRefs.current[index];
    if (!videoElement) return;
    const duration = videoElement.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    if (!isNaN(minutes) && !isNaN(seconds)) {
      const formattedDuration = `${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
      setDurations((prev) => ({
        ...prev,
        [index]: formattedDuration,
      }));
    }
  };

  return (
    <div className="mvg-grid-1">
      <div className={`mvg-grid-1-columns`}>
        {videos.map((video, index) => (
          <div
            key={`${video.id}-${index}`}
            data-video-id={video.id}
            className={`mvg-grid-1-card ${
              activeIndex === index ? "bPlNowEditing" : ""
            } ${video.height !== "custom" ? `h-${video.height}` : ""} ${
              playingIndex === index ? "playing" : ""
            }`}
            onClick={() => {
              handleCardClick(video, index);
              setActiveIndex(index);
            }}>
            {/* Loading Indicator */}
            {playingIndex === index && !activeVideoLoaded[index] && (
              <div className="vgb-loading-overlay">
                <div className="vgb-spinner"></div>
              </div>
            )}

            {/* Video Element */}
            <video
              key={video.video}
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.video}
              loop={items?.video?.loop}
              muted={items?.video?.muted}
              playsInline
              // preload="none"
              onLoadStart={() =>
                setActiveVideoLoaded((prev) => ({ ...prev, [index]: false }))
              }
              onWaiting={() =>
                setActiveVideoLoaded((prev) => ({ ...prev, [index]: false }))
              }
              onCanPlay={() =>
                setActiveVideoLoaded((prev) => ({ ...prev, [index]: true }))
              }
              onPlaying={() =>
                setActiveVideoLoaded((prev) => ({ ...prev, [index]: true }))
              }
              onLoadedMetadata={() => handleLoadedMetadata(index)}
              onEnded={() => setPlayingIndex(null)}
            />

            {/* Overlay */}
            <div
              className={`mvg-grid-1-card-overlay ${
                playingIndex === index ? "hidden-overlay" : ""
              }`}
            />

            {/* Play Button */}
            <div className="mvg-grid-1-card-play-btn">
              <div
                className="btn-inner"
                dangerouslySetInnerHTML={{ __html: items?.playBtn?.icon }}>
                {/* <Play fill="currentColor" /> */}
              </div>
            </div>

            {/* Duration Badge */}
            {items?.video?.showMinutes && (
              <div className="mvg-grid-1-card-duration">
                {durations[index] || "0:00"}
              </div>
            )}

            {/* Info */}
            <div className="mvg-grid-1-card-info">
              <h3 className="mvg-grid-1-card-title">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        video={lightboxVideo}
        settings={{
          backgroundColor: items?.lightbox?.backgroundColor,
          closeButtonColor: items?.lightbox?.closeButtonColor,
          closeButtonSize: items?.lightbox?.closeButtonSize?.desktop,
          closeOnClickOutside: items?.lightbox?.closeOnClickOutside,
          showCloseButton: items?.lightbox?.showCloseButton,
        }}
      />
    </div>
  );
};

export default MasonryGrid1;
