import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import MasonryVideoGrid from "../Common/MasonryVideoGrid/MasonryVideoGrid";
import { withSelect } from "@wordpress/data";
import { useState } from "react";
import { FrontShortCode } from "../../../../../../bpl-tools/ProControls";

const Edit = (props) => {
  const {
    attributes,
    setAttributes,
    clientId,
    device,
    currentPostId,
    currentPostType,
  } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const isPremium = Boolean(vgbpipecheck ?? false);

  const isGalleryPostType = currentPostType === "video-gallery-block";

  return (
    <>
      <Settings
        {...{
          attributes,
          setAttributes,
          device,
          activeIndex,
          setActiveIndex,
          isProModalOpen,
          setIsProModalOpen,
          isPremium,
          clientId,
          currentPostId,
          currentPostType,
        }}
      />
      <div {...useBlockProps()}>
        {isGalleryPostType && (
          <div className="bPlInspectorInfo">
            <FrontShortCode
              postType={currentPostType}
              shortCode={`[video_gallery id=${currentPostId}]`}
            />
          </div>
        )}
        <Style attributes={attributes} id={`block-${clientId}`} />
        {isPremium ? (
          <MasonryVideoGrid
            attributes={attributes}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ) : (
          <div>
            <div className="wp-block-mvg-masonry-video-grid-pro">
              <p style={{ color: "#ffffff", margin: "0" }}>
                This block is only available in the Pro version
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType, getCurrentPostId, getCurrentPostType } =
    select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
    currentPostId: getCurrentPostId() || select("core").getEditedPostAttribute("id"),
    currentPostType: getCurrentPostType() || select("core").getEditedPostAttribute("type"),
  };
})(Edit);
