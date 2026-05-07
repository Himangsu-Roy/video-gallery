import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { useState } from "@wordpress/element";
import {
  videoGalleryIcon,
  lightBoxIcon,
  masonryVideoGridIcon,
  parallaxRowIcon,
  sliderAutoplayIcon,
  videoCarouselIcon,
  videoPlaylistIcon,
  videoSliderIcon,
  testimonialIcon,
} from "../../../../Components/Common/utils/icons";
import { isBlockEnabled } from "../../../../Components/Common/utils/functions";

const SetupUI = ({ clientId, setAttributes, currentPostType }) => {
  const { replaceBlock, updateSettings } = useDispatch("core/block-editor");
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [showAllBlocks, setShowAllBlocks] = useState(true);

  const availableBlockTypes = useSelect((select) => {
    const blocks = select("core/blocks");
    if (!blocks || !blocks.getBlockTypes) return [];
    return blocks.getBlockTypes().map((block) => block.name);
  }, []);

  const allLayouts = [
    {
      name: "vgb/video-gallery",
      title: "Filterable Video Gallery",
      description: "Display your videos as gallery in a professional way.",
      icon: videoGalleryIcon,
      isFree: true,
      isPro: false,
    },
    {
      name: "vgblk/lightbox-video-gallery",
      title: "Lightbox Video Gallery",
      description: "Open any media type in a beautiful lightbox",
      icon: lightBoxIcon,
      isPro: true,
    },
    {
      name: "vgblk/masonry-video-grid-one",
      title: "Masonry Video Grid",
      description: "A masonry grid layout for your videos.",
      icon: masonryVideoGridIcon,
      isPro: true,
    },
    {
      name: "vgblk/parallax-row-video-gallery",
      title: "Parallax Row Video Gallery",
      description: "Videos with parallax scrolling effects.",
      icon: parallaxRowIcon,
      isPro: true,
    },
    {
      name: "vgblk/slider-autoplay-video",
      title: "Slider Autoplay Video",
      description: "Automatically play videos in a slider.",
      icon: sliderAutoplayIcon,
      isPro: true,
    },
    {
      name: "vgblk/video-carousel-gallery",
      title: "Video Carousel Gallery",
      description: "A carousel for navigating through videos.",
      icon: videoCarouselIcon,
      isPro: true,
    },
    {
      name: "vgblk/video-playlist-gallery",
      title: "Video Playlist Gallery",
      description: "A vertical or horizontal playlist of videos.",
      icon: videoPlaylistIcon,
      isPro: true,
    },
    {
      name: "vgblk/video-slider",
      title: "Video Slider",
      description: "Full-width video sliders.",
      icon: videoSliderIcon,
      isPro: true,
    },
    {
      name: "vgblk/video-testimonial-section",
      title: "Video Testimonial Section",
      description: "Showcase client testimonials with videos.",
      icon: testimonialIcon,
      isPro: true,
    },
  ];

  const layouts = ["video-gallery-block", "free", "pro"].includes(
    currentPostType,
  )
    ? allLayouts
    : availableBlockTypes.length > 0
    ? allLayouts.filter((layout) => availableBlockTypes.includes(layout.name))
    : allLayouts.filter((layout) => layout.isFree);

  const onSelectLayout = (layout) => {
    setSelectedLayout(layout);
    setShowAllBlocks(false);

    // Temporarily unlock the template on the client side to allow replacement
    updateSettings({ templateLock: false });

    if (layout.name === "vgb/video-gallery") {
      setAttributes({ isSetup: true });
    } else {
      if (!availableBlockTypes.includes(layout.name)) {
        alert("This layout is only available in the Pro version.");
        return;
      }
      try {
        const newBlock = createBlock(layout.name);
        replaceBlock(clientId, newBlock);
      } catch (error) {
        console.error("Failed to create block:", error);
      }
    }

    // Force template lock for all cases after selection
    setTimeout(() => {
      updateSettings({ templateLock: "all" });
    }, 100);
  };

  const handleAddNewGallery = () => {
    setShowAllBlocks(true);
    setSelectedLayout(null);
  };

  const displayedLayouts = showAllBlocks
    ? layouts
    : selectedLayout
    ? [selectedLayout]
    : layouts;

  const isPremium = Boolean(vgbpipecheck || currentPostType === "pro") ?? false;

  return (
    <div className="vgb-setup-ui">
      <div className="vgb-setup-header">
        <h2>Select a block layout type</h2>
        {/* <p>Open any media type in a beautiful lightbox</p> */}
      </div>
      <div className="vgb-setup-grid">
        {displayedLayouts.map(
          (layout, index) =>
            availableBlockTypes.includes(layout.name) && (
              <div
                key={index}
                className="vgb-setup-item"
                onClick={() => onSelectLayout(layout)}>
                <div className="vgb-setup-icon">{layout?.icon}</div>
                <div className="vgb-setup-content">
                  <h3>{layout?.title}</h3>
                  <p>{layout?.description}</p>
                </div>
                {/* {layout?.isPro && <span className="vgb-new-tag">Pro</span>} */}
                {/* {!availableBlockTypes.includes(layout.name) && !layout.isFree && (
              <span className="vgb-pro-tag">Pro</span>
            )} */}
                {!isPremium && layout.isPro && <span className="vgb-pro-tag">Pro</span>}
              </div>
            ),
        )}
      </div>

      {!showAllBlocks && selectedLayout && (
        <div className="vgb-setup-footer">
          <button
            onClick={handleAddNewGallery}
            className="vgb-add-new-gallery-btn">
            + Add New Video Gallery
          </button>
        </div>
      )}
    </div>
  );
};

export default SetupUI;
