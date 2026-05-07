import { useEffect, useState, useRef, useCallback } from "react";
import ParallaxRow from "./ParallaxRow";
import VideoLightbox from "./VideoLightbox";

function ParallaxVideoGallery({
  attributes,
  activeIndex,
  setActiveIndex,
  groupIndex,
  setGroupIndex,
  isBackend = false,
  doc = document,
  win = window,
}) {
  const [scrollY, setScrollY] = useState();
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const { videos, gallery, items } = attributes;
  const { orientation } = gallery;
  const videoContainerRef = useRef(null);
  const currentEditingRef = useRef(null);
  const [lightboxVideoSrc, setLightboxVideoSrc] = useState(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrollY(win.scrollY || 0);
    };

    win.addEventListener("scroll", handleWindowScroll, { passive: true });
    setScrollY(win.scrollY || 0);

    return () => win.removeEventListener("scroll", handleWindowScroll);
  }, [win, doc]);

  const handleVideoPlay = useCallback(
    (key, video) => {
      if (!video) return;

      if (items?.video?.lightbox) {
        setLightboxVideoSrc(video?.video);
        setPlayingVideoId(key);
      } else {
        setPlayingVideoId(key);
      }
    },
    [items?.video?.lightbox],
  );

  const onVideoPause = useCallback(() => setPlayingVideoId(null), []);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    if (!videoContainer) return;
    if (isBackend) {
      const handleClick = (e) => {
        const target = e.target.closest(".video-wrapper");
        if (!target) return;

        if (currentEditingRef.current) {
          currentEditingRef.current.classList.remove("bPlNowEditing");
        }

        target.classList.add("bPlNowEditing");
        currentEditingRef.current = target;
      };
      videoContainer.addEventListener("click", handleClick);
      return () => {
        videoContainer.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <div className="parallax-gallery" ref={videoContainerRef}>
      {videos?.map((group, index) => (
        <ParallaxRow
          key={`group-${index}`}
          videos={group}
          direction={index % 2 === 0 ? "left" : "right"}
          // speed={0.5}
          speed={0.5 + index * 0.1}
          scrollY={scrollY}
          playingVideoId={!items?.video?.lightbox ? playingVideoId : null}
          onVideoPlay={handleVideoPlay}
          onVideoPause={onVideoPause}
          repeatCount={1}
          attributes={attributes}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          groupIndex={groupIndex}
          orientation={orientation}
          gIndex={index}
          setGroupIndex={setGroupIndex}
        />
      ))}
      {items?.video?.lightbox && lightboxVideoSrc && playingVideoId && (
        <VideoLightbox
          videoSrc={lightboxVideoSrc}
          onClose={() => {
            setLightboxVideoSrc(null);
            setPlayingVideoId(null);
          }}
        />
      )}
    </div>
  );
}

export default ParallaxVideoGallery;
