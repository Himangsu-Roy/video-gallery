import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import VideoPlaylistGallery from "../Common/VideoPlaylistGallery/VideoPlaylistGallery";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (attributes?.videos?.length > 0) {
      const seenIds = new Set();
      let hasDuplicates = false;
      const newVideos = attributes.videos.map((video) => {
        if (!video.id || seenIds.has(video.id)) {
          hasDuplicates = true;
          return {
            ...video,
            id: Math.random().toString(36).slice(3, 11),
          };
        }
        seenIds.add(video.id);
        return video;
      });

      if (hasDuplicates) {
        setAttributes({ videos: newVideos });
      }
    }
  }, [attributes?.videos, setAttributes]);

  return (
    <>
      <Settings
        {...{
          attributes,
          setAttributes,
          activeIndex,
          setActiveIndex,
          isProModalOpen,
          setIsProModalOpen,
          isPremium,
          device,
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
          <VideoPlaylistGallery
            attributes={attributes}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            blockId={clientId}
            isEditor={true}
          />
        ) : (
          <div>
            <div className="wp-block-vpg-video-playlist-gallery-pro">
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
