import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ParallaxVideoGallery from "../Common/ParallaxRowVideoGallery/ParallaxVideoGallery";
import { useState } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { useRef } from "react";
import { FrontShortCode } from "../../../../../../bpl-tools/ProControls";

const Edit = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const isPremium = Boolean(vgbpipecheck ?? false);
  const containerRef = useRef(null);
  const [groupIndex, setGroupIndex] = useState(0);
  const {
    attributes,
    setAttributes,
    clientId,
    device,
    currentPostId,
    currentPostType,
  } = props;
  const doc = containerRef.current?.ownerDocument;
  const win = doc?.defaultView;

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
          setGroupIndex,
          clientId,
          currentPostId,
          currentPostType,
        }}
      />
      <div
        {...useBlockProps({
          draggable: false,
          ref: containerRef,
        })}>
        {isGalleryPostType && (
          <div className="bPlInspectorInfo">
            <FrontShortCode
              postType={currentPostType}
              shortCode={`[video_gallery id=${currentPostId}]`}
            />
          </div>
        )}
        <Style attributes={attributes} id={`block-${clientId}`} />

        {
          isPremium ? (
            <ParallaxVideoGallery
              attributes={attributes}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          doc={doc}
          win={win}
          groupIndex={groupIndex}
          setGroupIndex={setGroupIndex}
          isBackend={true}
        />
          ) : (
            <div>
              <div className="wp-block-prvg-parallax-row-video-gallery-pro">
                <p style={{ color: "#ffffff", margin: "0" }}>This block is only available in the Pro version</p>
              </div>
            </div>
          )
        }
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
