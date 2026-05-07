import { useRef, useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

const ITEM_GAP = 0;
const MIN_REPEAT = 0;

const ParallaxRow = ({
  videos,
  // direction = "left",
  speed,
  scrollY,
  playingVideoId,
  onVideoPlay,
  onVideoPause,
  activeIndex,
  setActiveIndex,
  groupIndex,
  orientation,
  setGroupIndex,
  gIndex,
}) => {
  /* ------------------------------------------------------------------ */
  /* 1. Drag handling (horizontal / vertical)                           */
  /* ------------------------------------------------------------------ */
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startPos = useRef(0);
  const trackRef = useRef(null);
  const isEven = gIndex % 2 == 0 ? true : false;
  const [instanceId, setInstanceId] = useState("");

  useEffect(() => {
    setInstanceId(Math.random().toString(36).substr(2, 9));
  }, []);

  const handleMouseDown = (e) => {
    setDragging(true);
    startPos.current = orientation === "horizontal" ? e.clientX : e.clientY;
  };

  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const cur = orientation === "horizontal" ? e.clientX : e.clientY;
    const delta = cur - startPos.current; // positive = drag right/down
    setDragOffset(delta);
  };

  /* ------------------------------------------------------------------ */
  /* 2. Build a *doubled* array – enough to fill the viewport + 1 loop */
  /* ------------------------------------------------------------------ */
  const safeVideos = Array.isArray(videos) ? videos : [];

  const itemSizeRef = useRef({});
  const measureItem = () => {
    if (!trackRef.current) return;
    const first = trackRef.current.querySelector(".video-wrapper");
    if (!first) return;
    const style = getComputedStyle(first);
    const w = first.offsetWidth + parseFloat(style.marginRight) + ITEM_GAP;
    const h = first.offsetHeight + parseFloat(style.marginBottom) + ITEM_GAP;
    itemSizeRef.current = { width: w, height: h };
  };

  useEffect(() => {
    measureItem();
    const ro = new ResizeObserver(measureItem);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [safeVideos.length]);

  const viewportSize =
    orientation === "horizontal" ? window.innerWidth : window.innerHeight;
  const itemsInView = itemSizeRef.current.width
    ? Math.ceil(viewportSize / (itemSizeRef.current.width ?? 1)) + 2
    : safeVideos.length * MIN_REPEAT;

  // Build base array once
  const baseVideos = safeVideos.map((v, i) => ({
    ...v,
    _origIdx: i,
    _key: instanceId ? `${instanceId}-${v.id}-orig-${i}` : `${v.id}-orig-${i}`,
  }));

  // Duplicate enough times
  const copiesNeeded = Math.max(
    MIN_REPEAT,
    Math.ceil(itemsInView / baseVideos.length) + 1,
  );
  const duplicated = Array.from({ length: copiesNeeded }, (_, copy) =>
    baseVideos.map((v, i) => ({
      ...v,
      _key: instanceId
        ? `${instanceId}-${v.id}-copy-${copy}-${i}`
        : `${v.id}-copy-${copy}-${i}`,
    })),
  ).flat();

  // For left-moving rows (odd), REVERSE the order of rendering
  const repeatedVideos = isEven ? duplicated : [...duplicated].reverse();

  const rawOffset = isEven
    ? scrollY * speed - dragOffset
    : scrollY * speed + dragOffset;

  /* direction-aware loop length */
  const loopLength = safeVideos.length * (itemSizeRef.current.width ?? 0);

  let moduloOffset = 0;
  if (loopLength > 0) {
    let mod = ((rawOffset % loopLength) + loopLength) % loopLength;
    // Even: content moves right, Odd: content moves left
    moduloOffset = isEven ? -mod : mod;
  }

  const translateValue =
    orientation === "horizontal"
      ? `translateX(${moduloOffset}px)`
      : `translateY(${moduloOffset}px)`;

  return (
    <div
      className="parallax-row"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setDragging(false)}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
      onClick={() => setGroupIndex(gIndex)}>
      <div
        ref={trackRef}
        className={`video-track video-items-wrapper-${gIndex}`}
        style={{
          transform: translateValue,
          transition: dragging ? "none" : "transform 0.3s ease-out",
          display: orientation === "horizontal" ? "flex" : "block",
        }}>
        {repeatedVideos.map((video) => (
          <div
            key={video._key}
            className="video-wrapper"
            style={{
              marginRight:
                orientation === "horizontal" ? `${ITEM_GAP}px` : undefined,
              marginBottom:
                orientation === "vertical" ? `${ITEM_GAP}px` : undefined,
            }}>
            <VideoPlayer
              className="video-player"
              video={video.video}
              poster={video.poster}
              title={video.title}
              subtitle={video.subtitle}
              isPlaying={playingVideoId === video._key}
              onPlay={() => onVideoPlay(video._key, video)}
              onPause={onVideoPause}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={video._origIdx}
              gIndex={gIndex}
              groupIndex={groupIndex}
              setGroupIndex={setGroupIndex}
              videos={safeVideos}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxRow;
