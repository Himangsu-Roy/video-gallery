import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl } from "@wordpress/components";

import {
  HelpPanel,
  ItemsPanel,
  BButtonGroup,
  IconLibrary,
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
  const { videos, options } = attributes;
  const isGalleryPostType = currentPostType === "video-gallery-block";

  setFreeFields([
    "Video Fit:",
    "",
    "Loop",
    "AutoPlay",
    "Currency Symbol",
    "Open in New Tab",
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
            title: `Product ${videos.length + 1}`,
            price: 99.99,
            original_price: 149.99,
            video:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster: "https://picsum.photos/400/300?random=1",
            product_image: "https://picsum.photos/800/600?random=1",
            order_index: videos.length + 1,
            created_at: new Date().toISOString(),
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
          label: __("Currency Symbol", "video-gallery"),
          value: options?.currency_symbol,
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              options: updateData(options, val, "currency_symbol"),
            }),
          Component: IconLibrary,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Fit:", "video-gallery"),
          className: "mt20",
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
          label: __("Loop", "video-gallery"),
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
          label: __("Open in New Tab", "video-gallery"),
          checked: options?.openInNewTab,
          onChange: (val) =>
            setAttributes({
              options: updateData(options, val, "openInNewTab"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default General;
