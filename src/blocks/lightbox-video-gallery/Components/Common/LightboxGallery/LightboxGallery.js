import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";
import lgVideo from "lightgallery/plugins/video";
import { useState, useEffect } from "react";

const LightboxGallery = ({ attributes }) => {
  const { videos = [] } = attributes || {};
  const [instanceId, setInstanceId] = useState("");

  useEffect(() => {
    setInstanceId(Math.random().toString(36).substr(2, 9));
  }, []);

  return (
    <div className="lightbox-page">
      <LightGallery
        speed={500} 
        plugins={[lgVideo]}
        elementClassNames="gallery-container">
        {videos.map((video, index) => {
          const key = instanceId ? `${instanceId}-${video.id || index}` : video.id || index;
          const subHtml = `<h4>${video?.title || ""}</h4><p>${
            video?.subtitle || ""
          }</p>`;

          const isHTML5 =
            video?.type === "html5" ||
            video?.video?.endsWith(".mp4") ||
            video?.video?.includes(".mp4");

          const videoData = {
            source: [{ src: video?.video, type: "video/mp4" }],
            tracks: video?.tracks || [],
            attributes: { preload: false, controls: true, playsinline: true },
          };

          const commonProps = {
            key,
            className: "video",
            "data-lg-size": "1280-720",
            "data-poster": video?.poster,
            "data-sub-html": subHtml,
          };

          return isHTML5 ? (
            <a {...commonProps} data-video={JSON.stringify(videoData)}>
              <img className="poster" src={video?.poster} alt={video?.title} />
            </a>
          ) : (
            <a {...commonProps} data-src={video?.video}>
              <img className="poster" src={video?.poster} alt={video?.title} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
};

export default LightboxGallery;
