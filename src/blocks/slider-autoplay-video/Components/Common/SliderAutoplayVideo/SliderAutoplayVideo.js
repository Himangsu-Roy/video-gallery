import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { sanitizeHTML } from "../../../../../../../bpl-tools/utils/common";

Swiper.use([Navigation]);

const SliderAutoplayVideo = ({
  attributes,
  activeIndex,
  setActiveIndex = () => {},
}) => {
  const sliderRef = useRef(null);
  const swiperRef = useRef(null);
  const navigationRef = useRef(null);

  const { videos: slides = [], gallery = {}, items } = attributes;
  const showArrows = gallery.arrow?.show !== false; // default = true

  // User-defined starting video (0 = first)
  const userInitialIndex = gallery?.initialVideoIndex ?? 0;
  const safeInitialIndex =
    slides.length > 0
      ? Math.max(0, Math.min(userInitialIndex, slides.length - 1))
      : 0;

  const [lightboxVideo, setLightboxVideo] = useState(null);
  const [videoLoadingStates, setVideoLoadingStates] = useState({});

  // === Create Arrows Inside a Shared Wrapper ===
  useEffect(() => {
    if (!navigationRef.current || !showArrows) {
      // Remove entire wrapper + arrows if disabled
      document.querySelector(".video-slider-arrows-wrapper")?.remove();
      return;
    }

    const container = navigationRef.current;

    // Remove old wrapper to prevent duplicates
    container.querySelector(".video-slider-arrows-wrapper")?.remove();

    // Create the wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "video-slider-arrows-wrapper";

    // Create prev button
    const prevBtn = document.createElement("div");
    prevBtn.className = "video-slider-prev";

    // Create next button
    const nextBtn = document.createElement("div");
    nextBtn.className = "video-slider-next";

    // === Use Custom Icons or Default SVG ===
    const leftIcon = gallery?.arrow?.leftIcon;
    const rightIcon = gallery?.arrow?.rightIcon;

    prevBtn.innerHTML = leftIcon
      ? `<img src="${leftIcon}" alt="Previous" />`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>`;

    nextBtn.innerHTML = rightIcon
      ? `<img src="${rightIcon}" alt="Next" />`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>`;

    // Click handlers
    prevBtn.onclick = () => swiperRef.current?.slidePrev();
    nextBtn.onclick = () => swiperRef.current?.slideNext();

    // Append buttons to wrapper
    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    // Append wrapper to container
    container.appendChild(wrapper);

    // Cleanup
    return () => {
      wrapper.remove();
    };
  }, [showArrows, gallery?.arrow?.leftIcon, gallery?.arrow?.rightIcon]);

  // Auto-play active video
  const updateVideos = (swiper) => {
    swiper.slides.forEach((slide, i) => {
      const video = slide.querySelector("video");
      if (!video) return;

      if (i === swiper.activeIndex) {
        const play = () => video.play().catch(() => {});
        video.onended = () => {
          video.currentTime = 0;
          play();
        };
        video.readyState >= 3
          ? setTimeout(play, 250)
          : video.addEventListener("canplay", play, { once: true });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  // Smart arrow visibility (only if arrows are enabled)
  const updateArrows = () => {
    if (!showArrows) return;
    const prev = document.querySelector(".video-slider-prev");
    const next = document.querySelector(".video-slider-next");
    prev?.classList.toggle("hidden", swiperRef.current?.isBeginning || false);
    next?.classList.toggle("hidden", swiperRef.current?.isEnd || false);
  };

  // Main Swiper
  useEffect(() => {
    if (!sliderRef.current || slides.length === 0) return;
    swiperRef.current = new Swiper(sliderRef.current, {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: gallery?.columnGap?.mobile || 40,
      speed: gallery?.slideSpeed,
      allowTouchMove: true,
      loop: gallery?.loop === true,
      initialSlide: safeInitialIndex,

      on: {
        init(swiper) {
          setActiveIndex(swiper.activeIndex);
          updateVideos(swiper);
          updateArrows();
        },
        slideChange(swiper) {
          setActiveIndex(swiper.activeIndex);
          updateVideos(swiper);
          updateArrows();
        },
        resize: updateArrows,
      },

      breakpoints: {
        575: { spaceBetween: gallery?.columnGap?.desktop || 90 },
      },
    });

    // Wheel navigation
    let scrolling = false;
    const wheelHandler = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (scrolling) return;
      scrolling = true;
      e.deltaX > 0
        ? swiperRef.current?.slideNext()
        : swiperRef.current?.slidePrev();
      setTimeout(() => (scrolling = false), 1100);
    };

    sliderRef.current.addEventListener("wheel", wheelHandler, {
      passive: false,
    });
    window.addEventListener("resize", () => swiperRef.current?.update());

    return () => {
      sliderRef.current?.removeEventListener("wheel", wheelHandler);
      swiperRef.current?.destroy(true, true);
      swiperRef.current = null;
    };
  }, [slides, gallery, safeInitialIndex, showArrows]);

  return (
    <>
      <section className="base-template">
        <div className="wrapper base-template__wrapper" ref={navigationRef}>
          <div className="base-template__content">
            <div className="video-slider swiper" ref={sliderRef}>
              <div className="video-slider__wrapper swiper-wrapper">
                {slides.map((slide, i) => (
                  <div className="video-slider__slide swiper-slide" key={i}>
                    <div
                      className={`video-slider__video-box ${
                        i === activeIndex ? "bPlNowEditing" : ""
                      }`}
                      onClick={() => {
                        setLightboxVideo(slide?.video);
                        setActiveIndex(i);
                      }}>
                      {videoLoadingStates[i] && (
                        <div className="vgb-loading-overlay">
                          <div className="vgb-spinner"></div>
                        </div>
                      )}
                      <video
                        key={slide?.video}
                        className="video-slider__video"
                        src={slide?.video}
                        playsInline
                        muted
                        onLoadStart={() =>
                          setVideoLoadingStates((prev) => ({
                            ...prev,
                            [i]: true,
                          }))
                        }
                        onWaiting={() =>
                          setVideoLoadingStates((prev) => ({
                            ...prev,
                            [i]: true,
                          }))
                        }
                        onCanPlay={() =>
                          setVideoLoadingStates((prev) => ({
                            ...prev,
                            [i]: false,
                          }))
                        }
                        onPlaying={() =>
                          setVideoLoadingStates((prev) => ({
                            ...prev,
                            [i]: false,
                          }))
                        }
                      />
                    </div>

                    <div className="video-slider__info-box">
                      <h2 className="video-slider__info-title">
                        {sanitizeHTML(slide?.title)}
                      </h2>
                      <time className="video-slider__info-text">
                        {sanitizeHTML(slide?.subtitle)}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {items?.options?.lightbox && lightboxVideo && (
          <div
            className="video-lightbox-overlay"
            onClick={() => setLightboxVideo(null)}>
            <div
              className="video-lightbox-content"
              onClick={(e) => e.stopPropagation()}>
              <video
                src={lightboxVideo}
                controls
                autoPlay
                playsInline
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  borderRadius: "8px",
                }}
              />
              <button
                className="video-lightbox-close"
                onClick={() => setLightboxVideo(null)}>
                ×
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SliderAutoplayVideo;
