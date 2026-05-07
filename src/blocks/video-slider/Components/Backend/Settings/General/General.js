import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
  ToggleControl,
} from "@wordpress/components";
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
  const { items, gallery } = attributes;
  const isGalleryPostType = currentPostType === "video-gallery-block";

  setFreeFields([
    "Row Gap",
    "Column Gap",
    "Columns",
    "Video Fit:",
    "autoplay",
    "muted",
    "Unmuted",
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
            title: "Chloe J.",
            rating: 5,
            video:
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster:
              "https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/poster.jpg",
          }}
          ItemSettings={ItemSettings}
          itemLabel="Video"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          premiumProps={premiumProps}
          design="sortable"
        />
      </PanelBody>

      {/* Layout Settings Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "video-gallery")}
        initialOpen={false}>
        {/* {renderComponentControl({
          label: "Columns",
          value: gallery?.columns[device],
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "columns", device),
            }),
          Component: RangeControl,
          min: 1,
          max: 6,
          step: 1,
          beforeIcon: "grid-view",
          isDeviceControl: true,
          ...premiumProps,
        })} */}

        {renderComponentControl({
          label: __("Column Gap", "video-gallery"),
          value: gallery?.columnGap[device],
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "columnGap", device),
            }),
          Component: NumberControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* {renderComponentControl({
          label: "Row Gap",
          value: gallery?.rowGap[device],
          className: "mt20",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "rowGap", device),
            }),
          Component: NumberControl,
          isDeviceControl: true,
          ...premiumProps,
        })} */}
      </PanelBody>

      <PanelBody
        title={__("Options", "video-gallery")}
        className="bPlPanelBody"
        initialOpen={false}>
        {renderComponentControl({
          label: __("Video Fit:", "video-gallery"),
          labelPosition: "top",
          value: items?.video?.objectFit,
          onChange: (value) =>
            setAttributes({
              items: updateData(items, value, "video", "objectFit"),
            }),
          options: videoSizeOptions,
          Component: BButtonGroup,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: __("Autoplay", "video-gallery"),
          checked: items?.video?.autoplay,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "autoplay"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: items?.video?.muted
            ? __("Muted", "video-gallery")
            : __("Unmuted", "video-gallery"),
          checked: items?.video?.muted,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "muted"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default General;
