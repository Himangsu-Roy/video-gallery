import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useWooCommerceProduct from "../../../hooks/useWooCommerceProduct";

const VideoCard = ({
  product,
  onClick,
  isDragging,
  options,
  setActiveIndex = () => {},
  activeIndex,
  index,
}) => {
  const videoRef = useRef(null);
  const autoPlay = options?.autoPlay ?? true;
  const loop = options?.loop ?? true;

  // Fetch WooCommerce product data if enabled
  const {
    product: wooProduct,
    loading: wooLoading,
    error: wooError,
  } = useWooCommerceProduct(product?.product_id, product?.woocommerce_enabled);

  // Merge WooCommerce product data with manual data
  // Only use WooCommerce data if it's enabled, not loading, no error, and product exists
  const displayProduct =
    product?.woocommerce_enabled && wooProduct && !wooLoading && !wooError
      ? {
          ...product,
          title: wooProduct.title || product.title,
          price: wooProduct.price || product.price,
          original_price: wooProduct.sale_price
            ? wooProduct.regular_price
            : product.original_price,
          product_image: wooProduct.image || product.product_image,
          product_url: wooProduct.permalink || product.product_url,
        }
      : product;

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isDragging) {
      onClick();
    }
    setActiveIndex(index);
  };

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = loop;

      // Handle autoplay
      if (autoPlay) {
        setIsLoading(true); // Assume loading starts when autoplay is requested
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsLoading(false))
            .catch((error) => {
              console.log("Autoplay prevented:", error);
              setIsLoading(false);
            });
        }
      } else {
        videoRef.current.pause();
        setIsLoading(false);
      }
    }
  }, [autoPlay, loop]);

  return (
    <div
      className={`vcg-video-card ${
        index === activeIndex ? "bPlNowEditing" : ""
      }`}
      onClick={handleClick}>
      <div className="vcg-video-preview">
        {/* Loading Indicator */}
        {isLoading && (
          <div className="vgb-loading-overlay">
            <div className="vgb-spinner"></div>
          </div>
        )}
        <video
          key={displayProduct?.video}
          ref={videoRef}
          src={displayProduct?.video}
          className="vcg-video-element"
          autoPlay={options?.autoPlay}
          loop={options?.loop}
          muted
          playsInline
          preload="none"
          onLoadStart={() => setIsLoading(true)}
          onWaiting={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onPlaying={() => setIsLoading(false)}
        />

        <div className="vcg-video-overlay">
          <div className="vcg-play-button">
            <Play className="vcg-play-icon" fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="vcg-card-info">
        <img
          src={displayProduct?.product_image}
          alt={displayProduct?.title}
          className="vcg-product-image"
          loading="lazy"
        />
        <div className="vcg-product-details">
          <h3 className="vcg-product-name">{displayProduct?.title}</h3>
          <div className="vcg-product-pricing">
            {displayProduct?.original_price && (
              <span className="vcg-original-price" style={{ display: "flex" }}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  dangerouslySetInnerHTML={{ __html: options?.currency_symbol }}
                />
                {displayProduct?.original_price}
              </span>
            )}

            {displayProduct?.price && (
              <span className="vcg-current-price" style={{ display: "flex" }}>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
