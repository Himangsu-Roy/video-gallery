import { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { UpNextSidebar } from "./UpNextSidebar";

function VideoPlaylistGallery({ attributes, setActiveIndex, activeIndex, isEditor = false }) {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { options } = attributes;

  useEffect(() => {
    loadVideos();
  }, [attributes?.videos]);

  async function loadVideos() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (attributes?.videos?.length > 0) {
        setVideos(attributes?.videos);
      } else {
        setVideos(attributes?.videos);
      }
    } catch (error) {
      console.error("Error loading videos:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleVideoSelect(index) {
    if (index !== -1) {
      setCurrentVideoIndex(index);
    }
  }

  function handleVideoEnd() {
    if (currentVideoIndex < videos?.length - 1) {
      setCurrentVideoIndex((prev) => prev + 1);
    } else if (options?.loop) {
      setCurrentVideoIndex(0);
    }
  }

  function handleNext() {
    if (currentVideoIndex < videos?.length - 1) {
      setCurrentVideoIndex((prev) => prev + 1);
    } else if (options?.loop) {
      setCurrentVideoIndex(0);
    }
  }

  function handlePrevious() {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prev) => prev - 1);
    }
  }

  if (loading) {
    return (
      <div className="vpg-loading-container">
        <div className="vpg-loading-text">Loading videos...</div>
      </div>
    );
  }

  if (videos?.length === 0) {
    return (
      <div className="vpg-loading-container">
        <div className="vpg-loading-text">No videos available</div>
      </div>
    );
  }

  const currentVideo = videos?.[currentVideoIndex];

  return (
    <div className="vpg-main-container">
      <div className="vpg-layout">
        <div className="vpg-player-wrapper">
          <VideoPlayer
            key={currentVideo?.id + "-" + currentVideoIndex}
            video={currentVideo}
            onVideoEnd={handleVideoEnd}
            onNext={handleNext}
            onPrevious={handlePrevious}
            hasNext={currentVideoIndex < videos?.length - 1 || options?.loop}
            hasPrevious={currentVideoIndex > 0}
            options={options}
            isEditor={isEditor}
          />
        </div>

        <div
          className={`vpg-sidebar-wrapper ${
            sidebarOpen ? "vpg-sidebar-open" : "vpg-sidebar-closed"
          }`}>
          <UpNextSidebar
            key={currentVideo?.id + "-" + currentVideoIndex}
            videos={videos}
            currentVideoId={currentVideo?.id}
            onVideoSelect={handleVideoSelect}
            onClose={() => setSidebarOpen(false)}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            options={options}
          />
        </div>

        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="vpg-sidebar-toggle">
            Up Next ({videos.length - 1})
          </button>
        )}

        {sidebarOpen && (
          <div
            className="vpg-sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default VideoPlaylistGallery;
