import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
  RangeControl,
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
import { FrontShortCode } from "../../../../../../../../bpl-tools/ProControls";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";

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
    "Tall Height",
    "Medium Height",
    "Short Height",
    "",
    "Show Minutes",
    "loop",
    "No Loop",
    "Enable Lightbox",
    "Close on Click Outside",
    "Show Close Button",
    "Lightbox Show Close Button",
    "Lightbox Close on Click Outside",
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
            title: "Coastal Sunset",
            height: "tall",
            video:
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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

      {/* Layout Settings Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: __("Columns", "video-gallery"),
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
        })}

        {renderComponentControl({
          label: __("Column Gap", "video-gallery"),
          className: "mt20",
          value: gallery?.columnGap[device],
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "columnGap", device),
            }),
          Component: NumberControl,
          isDeviceControl: true,

          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Row Gap", "video-gallery"),
          className: "mt20",
          value: gallery?.rowGap[device],
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "rowGap", device),
            }),
          Component: NumberControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
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
          label: __("Show Minutes", "video-gallery"),
          checked: items?.video?.showMinutes,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "showMinutes"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: items?.video?.muted ? "Muted" : "Unmuted",
          checked: items?.video?.muted,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "muted"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {/* loop */}
        {renderComponentControl({
          className: "mt20",
          label: items?.video?.loop ? "Loop" : "No Loop",
          checked: items?.video?.loop,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "loop"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {/* Enable Lightbox */}
        {renderComponentControl({
          className: "mt20",
          label: __("Enable Lightbox", "video-gallery"),
          checked: items?.lightbox?.enabled,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "lightbox", "enabled"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {items?.lightbox?.enabled && (
          <>
            {/* Close on Click Outside */}
            {renderComponentControl({
              className: "mt20",
              label: __("Lightbox Close on Click Outside", "video-gallery"),
              checked: items?.lightbox?.closeOnClickOutside,
              onChange: (val) =>
                setAttributes({
                  items: updateData(
                    items,
                    val,
                    "lightbox",
                    "closeOnClickOutside",
                  ),
                }),
              Component: ToggleControl,
              ...premiumProps,
            })}

            {/* Show Close Button */}
            {renderComponentControl({
              className: "mt20",
              label: __("Lightbox Show Close Button", "video-gallery"),
              checked: items?.lightbox?.showCloseButton,
              onChange: (val) =>
                setAttributes({
                  items: updateData(items, val, "lightbox", "showCloseButton"),
                }),
              Component: ToggleControl,
              ...premiumProps,
            })}
          </>
        )}
      </PanelBody>
    </>
  );
};

export default General;
