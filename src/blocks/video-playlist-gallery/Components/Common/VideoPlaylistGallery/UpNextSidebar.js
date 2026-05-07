import { X, Play } from "lucide-react";
import { VideoDuration } from "./VideoDuration";
import { useViewCount, useRealTimeUploadDate } from "./VideoMetadata";

export function UpNextSidebar({
  videos,
  currentVideoId,
  onVideoSelect,
  onClose,
  setActiveIndex = () => {},
  activeIndex,
  options,
}) {
  return (
    <div className="vpg-upnext-sidebar">
      <div className="vpg-upnext-header">
        <div>
          <h2 className="vpg-upnext-title">Up Next</h2>
          <p className="vpg-upnext-count">{videos.length} videos</p>
        </div>

        <button
          onClick={onClose}
          className="vpg-upnext-close"
          aria-label="Close sidebar">
          <X className="vpg-icon" />
        </button>
      </div>

      <div className="vpg-upnext-content">
        <div className="vpg-upnext-list">
          {videos.map((video, index) => (
            <VideoListItem
              key={video.id + "-" + index}
              video={video}
              isCurrentVideo={video.id === currentVideoId}
              onVideoSelect={onVideoSelect}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              index={index}
              options={options}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoListItem({
  video,
  isCurrentVideo,
  onVideoSelect,
  setActiveIndex,
  activeIndex,
  index,
  options,
}) {
  const viewData = useViewCount(video?.id);
  const uploadDate = useRealTimeUploadDate(video?.created_at);

  const displayPoster = video?.poster;

  return (
    <button
      onClick={() => {
        onVideoSelect(index);
        setActiveIndex(index);
      }}
      className={`vpg-upnext-item ${
        index === activeIndex ? "bPlNowEditing" : ""
      }`}>
      <div
        className={`vpg-upnext-item-inner ${
          isCurrentVideo ? "vpg-current" : ""
        }`}>
        <div className="vpg-upnext-thumbnail">
          {displayPoster ? (
            <img
              src={displayPoster}
              alt={video?.title}
              className="vpg-thumbnail-img"
            />
          ) : (
            <div className="vpg-thumbnail-placeholder" />
          )}

          {options?.playBadge && isCurrentVideo && (
            <span className="vpg-now-playing">Now Playing</span>
          )}

          {!isCurrentVideo && (
            <div className="vpg-play-overlay">
              <div className="vpg-play-button">
                <Play className="vpg-play-icon" fill="currentColor" />
              </div>
            </div>
          )}

          <VideoDuration options={options} videoUrl={video?.video} />
        </div>

        <div className="vpg-upnext-info">
          <h3
            className={`vpg-video-title ${
              isCurrentVideo ? "vpg-current" : ""
            }`}>
            {video?.title}
          </h3>

          <p className="vpg-channel-name">{video?.subtitle}</p>

          {options?.videoMetadata && (
            <p className="vpg-video-meta">
              {viewData.formattedViews}
              {viewData.formattedViews && uploadDate && " • "}
              {uploadDate}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}
