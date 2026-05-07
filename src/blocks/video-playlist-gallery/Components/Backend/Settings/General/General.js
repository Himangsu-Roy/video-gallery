import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl } from "@wordpress/components";
import {
  HelpPanel,
  ItemsPanel,
  BButtonGroup,
} from "../../../../../../../../bpl-tools/Components";
import ItemSettings from "./../ItemSettings";
import { videoSizeOptions } from "../../../../../../Components/Common/utils/options";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../../Components/Common/utils/functions";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";

import { FrontShortCode } from "../../../../../../../../bpl-tools/ProControls";

const General = ({
  attributes,
  setAttributes,
  device,
  itemsProps,
  premiumProps,
  clientId,
  activeIndex,
  setActiveIndex,
  currentPostId,
  currentPostType,
}) => {
  const { videos, options } = attributes;
  const isGalleryPostType = currentPostType === "video-gallery-block";

  setFreeFields([
    "Video Fit:",
    "muted",
    "Unmuted",
    "Tall Height",
    "Medium Height",
    "Short Height",
    "",
    "Playlist Loop",
    "AutoPlay",
    "View/Upload Date",
    "Category",
    "Active Play Badge",
    "Duration",
  ]);

  return (
    <>
      {isGalleryPostType && (
        <div className="bPlInspectorInfo">
          <FrontShortCode
            postType={currentPostType}
            shortCode={`[video_gallery id=${currentPostId}]`}
            stacked={true}
          />
        </div>
      )}

      {/* Help Panel */}
      <HelpPanel
        slug="video-gallery-block"
        docsLink="https://bblockswp.com/docs/video-gallery-block"
      />

      {/* Videos Panel */}
      <PanelBody className="bPlPanelBody" title={__("Videos", "video-gallery")}>
        <ItemsPanel
          {...itemsProps}
          attributes={attributes}
          setAttributes={setAttributes}
          clientId={clientId}
          arrKey="videos"
          newItem={{
            id: Math.random().toString(36).slice(3, 11),
            title: `Title ${videos.length + 1}`,
            description: `Description ${videos.length + 1}`,
            video:
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster:
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
            category: "Demo",
            subtitle: "Sample Channel",
            created_at: Date.now(),
          }}
          ItemSettings={ItemSettings}
          itemLabel="Video"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          premiumProps={premiumProps}
          device={device}
          design="sortable"
        />
      </PanelBody>

      {/* Options Panel */}
      <PanelBody
        title={__("Options", "video-gallery")}
        className="bPlPanelBody"
        initialOpen={false}>
        {renderComponentControl({
          label: __("Video Fit:", "video-gallery"),
          labelPosition: "top",
          value: options?.objectFit,
          onChange: (value) =>
            setAttributes({
              options: updateData(options, value, "objectFit"),
            }),
          options: videoSizeOptions,
          Component: BButtonGroup,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: __("Category", "video-gallery"),
          checked: options?.category,
          onChange: (val) =>
            setAttributes({
              options: updateData(options, val, "category"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: __("Active Play Badge", "video-gallery"),
          checked: options?.playBadge,
          onChange: (val) =>
            setAttributes({
              options: updateData(options, val, "playBadge"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: __("Playlist Loop", "video-gallery"),
          checked: options?.loop,
          onChange: (val) =>
            setAttributes({
              options: updateData(options, val, "loop"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: __("Autoplay", "video-gallery"),
          checked: options?.autoPlay,
          onChange: (val) =>
            setAttributes({
              options: updateData(options, val, "autoPlay"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: __("Duration", "video-gallery"),
          checked: options?.duration,
          onChange: (val) =>
            setAttributes({
              options: updateData(options, val, "duration"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: __("View/Upload Date", "video-gallery"),
          checked: options?.videoMetadata,
          onChange: (val) =>
            setAttributes({
              options: updateData(options, val, "videoMetadata"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default General;
