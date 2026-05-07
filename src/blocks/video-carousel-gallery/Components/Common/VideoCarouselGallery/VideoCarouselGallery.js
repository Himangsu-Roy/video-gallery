import { useState, useEffect, useRef } from "react";
import VideoCard from "./VideoCard";
import VideoLightbox from "./VideoLightbox";

const VideoCarouselGallery = ({ attributes, setActiveIndex, activeIndex }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { options } = attributes;
  const [instanceId, setInstanceId] = useState("");

  useEffect(() => {
    setInstanceId(Math.random().toString(36).substr(2, 9));
  }, []);

  // Drag to scroll functionality
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [attributes?.videos]);

  async function fetchProducts() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (attributes?.videos?.length > 0) {
        setProducts(attributes?.videos);
      } else {
        setProducts(attributes?.videos);
      }
    } catch (error) {
      console.error("Error loading videos:", error);
    } finally {
      setLoading(false);
    }
  }

  // Drag handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
    scrollContainerRef.current.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!scrollContainerRef.current) return;
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = "grab";
    scrollContainerRef.current.style.userSelect = "auto";
  };

  const handleMouseLeave = () => {
    if (isDragging && scrollContainerRef.current) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
    }
  };

  if (loading) {
    return (
      <div className="vcg-loading">
        <div className="vcg-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="vcg-carousel-container">
        <div className="vcg-carousel-inner">
          <div
            className="vcg-carousel-scroll-wrapper"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}>
            <div className="vcg-carousel-cards">
              {products.map((product, index) => (
                <VideoCard
                  key={instanceId ? `${instanceId}-${product.id}` : product.id}
                  product={product}
                  onClick={() => !isDragging && setSelectedIndex(index)}
                  isDragging={isDragging}
                  options={options}
                  setActiveIndex={setActiveIndex}
                  activeIndex={activeIndex}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <VideoLightbox
          products={products}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          options={options}
        />
      )}
    </>
  );
};

export default VideoCarouselGallery;
