import { X } from "lucide-react";
import { useEffect, useRef } from "react";

const Lightbox = ({
  isOpen,
  onClose,
  video,
  settings = {},
}) => {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  const {
    backgroundColor = "#000000ee",
    closeButtonColor = "#ffffff",
    closeButtonSize = "40px",
    closeOnClickOutside = true,
    showCloseButton = true,
  } = settings;

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Auto-play video when lightbox opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (closeOnClickOutside && e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen || !video) return null;

  return (
    <div
      ref={overlayRef}
      className="mvg-lightbox"
      style={{ backgroundColor }}
      onClick={handleOverlayClick}
    >
      <div className="mvg-lightbox-content">
        {showCloseButton && (
          <button
            className="mvg-lightbox-close"
            onClick={onClose}
            style={{
              color: closeButtonColor,
              width: closeButtonSize,
              height: closeButtonSize,
            }}
            aria-label="Close lightbox"
          >
            <X size={parseInt(closeButtonSize) * 0.6} />
          </button>
        )}

        <video
          ref={videoRef}
          className="mvg-lightbox-video"
          src={video.video}
          controls
          loop
          playsInline
        />

        {video.title && (
          <div className="mvg-lightbox-info">
            <h3>{video.title}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
