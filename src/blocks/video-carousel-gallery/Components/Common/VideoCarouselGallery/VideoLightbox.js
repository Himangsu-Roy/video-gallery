import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import useWooCommerceProduct from "../../../hooks/useWooCommerceProduct";

const VideoLightbox = ({ products, initialIndex, onClose, options }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  const autoPlay = options?.autoPlay ?? true;
  const loop = options?.loop ?? true;

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const lightboxRef = useRef(null);
  const currentProduct = products[currentIndex];

  // Fetch WooCommerce product data if enabled
  const {
    product: wooProduct,
    loading: wooLoading,
    error: wooError,
  } = useWooCommerceProduct(
    currentProduct?.product_id,
    currentProduct?.woocommerce_enabled,
  );

  // Merge WooCommerce product data with manual data
  // Only use WooCommerce data if it's enabled, not loading, no error, and product exists
  const displayProduct =
    currentProduct?.woocommerce_enabled &&
    wooProduct &&
    !wooLoading &&
    !wooError
      ? {
          ...currentProduct,
          title: wooProduct.title || currentProduct.title,
          price: wooProduct.price || currentProduct.price,
          original_price: wooProduct.sale_price
            ? wooProduct.regular_price
            : currentProduct.original_price,
          product_image: wooProduct.image || currentProduct.product_image,
          product_url: wooProduct.permalink || currentProduct.product_url,
          add_to_cart_url:
            wooProduct.add_to_cart_url || currentProduct.add_to_cart_url,
        }
      : currentProduct;

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  // Handle video loading when index changes
  useEffect(() => {
    if (videoRef.current) {
      setIsLoading(true);
      videoRef.current.load();
      if (autoPlay) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [currentIndex, autoPlay]);

  // Handle options changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = loop;

      if (autoPlay) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [autoPlay, loop]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : products.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < products.length - 1 ? prev + 1 : 0));
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (e.target.closest("button")) return;

    setIsDragging(true);
    setTouchStart(e.clientX);
    setTouchEnd(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag) {
      handleNext();
    } else if (isRightDrag) {
      handlePrevious();
    }

    // Reset
    setIsDragging(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTouchStart(0);
      setTouchEnd(0);
    }
  };

  // Handle click outside video to close lightbox
  const handleBackgroundClick = (e) => {
    if (
      e.target.classList.contains("vcg-lightbox") ||
      e.target.classList.contains("vcg-lightbox-content")
    ) {
      onClose();
    }
  };

  return (
    <div
      className="vcg-lightbox"
      ref={lightboxRef}
      onClick={handleBackgroundClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}>
      <button onClick={onClose} className="vcg-close-button">
        <X className="vcg-close-icon" />
      </button>

      <div className="vcg-lightbox-content">
        <div className="vcg-preview-left">
          {currentIndex > 0 && (
            <div className="vcg-preview-thumbnail">
              <img
                src={products[currentIndex - 1].poster}
                alt={products[currentIndex - 1].title}
                loading="lazy"
              />
            </div>
          )}
        </div>

        <div className="vcg-main-video-wrapper">
          <button
            onClick={handlePrevious}
            className="vcg-nav-button vcg-nav-prev">
            <ChevronLeft className="vcg-nav-icon" />
          </button>

          <button onClick={handleNext} className="vcg-nav-button vcg-nav-next">
            <ChevronRight className="vcg-nav-icon" />
          </button>

          <div className="vcg-video-container">
            {/* Loading Indicator */}
            {isLoading && (
              <div className="vgb-loading-overlay">
                <div className="vgb-spinner"></div>
              </div>
            )}
            <video
              key={displayProduct.video}
              ref={videoRef}
              className="vcg-lightbox-video"
              loop={loop}
              autoPlay={autoPlay}
              muted={isMuted}
              playsInline
              onLoadStart={() => setIsLoading(true)}
              onWaiting={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              onPlaying={() => setIsLoading(false)}
            >
              <source src={displayProduct.video} type="video/mp4" />
            </video>

            <button onClick={toggleMute} className="vcg-mute-button">
              {isMuted ? (
                <VolumeX className="vcg-volume-icon" />
              ) : (
                <Volume2 className="vcg-volume-icon" />
              )}
            </button>

            <div className="vcg-product-info-wrapper">
              <div className="vcg-product-info-card">
                <img
                  src={displayProduct.product_image}
                  alt={displayProduct.title}
                  className="vcg-product-info-image"
                />
                <div className="vcg-product-info-details">
                  <h3 className="vcg-product-info-name">
                    {displayProduct.title}
                  </h3>
                  <div className="vcg-product-info-pricing">
                    {displayProduct?.original_price && (
                      <span
                        className="vcg-product-info-original"
                        style={{ display: "flex" }}>
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: options?.currency_symbol,
                          }}
                        />
                        {displayProduct?.original_price}
                      </span>
                    )}
                    <span
                      className="vcg-product-info-current"
                      style={{ display: "flex" }}>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: options?.currency_symbol,
                        }}
                      />
                      {displayProduct?.price}
                    </span>
                  </div>
                </div>
                {displayProduct?.product_url && (
                  <a
                    href={displayProduct?.product_url || "#"}
                    className="vcg-shop-button"
                    target={options?.openInNewTab ? "_blank" : "_self"}
                    rel="noopener noreferrer">
                    {/* {__("Shop", "video-gallery")} */}
                    Shop
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="vcg-preview-right">
          {currentIndex < products.length - 1 && (
            <div className="vcg-preview-thumbnail">
              <img
                src={products[currentIndex + 1].poster}
                alt={products[currentIndex + 1].title}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;
