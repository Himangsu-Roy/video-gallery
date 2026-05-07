import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import VideoSlider from "../Common/VideoSlider/VideoSlider";
import { useState } from "@wordpress/element";
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
          activeIndex,
          setActiveIndex,
          device,
          isPremium,
          isProModalOpen,
          setIsProModalOpen,
          clientId,
          currentPostId,
          currentPostType,
        }}
      />
      <div {...useBlockProps({})}>
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
          <VideoSlider
            attributes={attributes}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ) : (
          <div>
            <div className="wp-block-vsl-video-slider-pro">
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
    currentPostId:
      getCurrentPostId() || select("core").getEditedPostAttribute("id"),
    currentPostType:
      getCurrentPostType() || select("core").getEditedPostAttribute("type"),
  };
})(Edit);
