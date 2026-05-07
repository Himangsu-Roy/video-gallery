import { useState, useEffect } from "react";

export function VideoDuration({ options, videoUrl }) {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (!videoUrl) return;

    const video = document.createElement("video");
    video.src = videoUrl;
    video.preload = "metadata";

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      // Clean up
      video.remove();
    };

    const handleError = () => {
      console.error("Error loading video metadata for:", videoUrl);
      setDuration(0);
      video.remove();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("error", handleError);
      video.remove();
    };
  }, [videoUrl]);

  const formatTime = (time) => {
    if (!time && time !== 0) return "--:--";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    options?.duration && (
      <span className="vpg-duration">{formatTime(duration)}</span>
    )
  );
}
