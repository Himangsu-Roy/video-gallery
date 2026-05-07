import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
  RangeControl,
} from "@wordpress/components";
import {
  BButtonGroup,
  HelpPanel,
  ItemsPanel,
} from "../../../../../../../../bpl-tools/Components";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../../Components/Common/utils/functions";
import { updateAttributes } from "../../../../../../../../bpl-tools/utils/functions";
import { videoSizeOptions } from "../../../../../../Components/Common/utils/options";
import ItemSettings from "../ItemSettings";
import { FrontShortCode } from "../../../../../../../../bpl-tools/ProControls";

const General = ({
  attributes,
  setAttributes,
  device,
  premiumProps,
  clientId,
  activeIndex,
  setActiveIndex,
  currentPostId,
  currentPostType,
}) => {
  setFreeFields([
    "Row Gap",
    "Column Gap",
    "Columns",
    "Video Fit",
    "autoplay",
    "muted",
    "Unmuted",
    "Orientation",
    "Columns",
  ]);

  const { gallery, items } = attributes;
  const updateObj = updateAttributes(attributes, setAttributes);
  const isGalleryPostType = currentPostType === "video-gallery-block";

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

      <HelpPanel
        slug="video-gallery-block"
        docsLink="https://bblockswp.com/docs/video-gallery-block"
      />

      <PanelBody
        className="bPlPanelBody"
        title={__("Videos", "video-gallery")}
        initialOpen={true}>
        <ItemsPanel
          attributes={attributes}
          setAttributes={setAttributes}
          clientId={clientId}
          arrKey="videos"
          newItem={{
            id: Math.random().toString(36).slice(2, 11),
            video:
              "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster:
              "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
            caption: "Big Buck Bunny",
            albs: [],
            title: "Big Buck Bunny",
            subtitle: "By Blender Foundation",
          }}
          ItemSettings={ItemSettings}
          itemLabel="Video"
          activeIndex={activeIndex}
          premiumProps={premiumProps}
          setActiveIndex={setActiveIndex}
          design="sortable"
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: __("Columns", "video-gallery"),
          value: gallery?.columns[device],
          onChange: (val) => updateObj("gallery", val, "columns", device),
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
          onChange: (val) => updateObj("gallery", val, "columnGap", device),
          Component: NumberControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Row Gap", "video-gallery"),
          className: "mt20",
          value: gallery?.rowGap[device],
          onChange: (val) => updateObj("gallery", val, "rowGap", device),
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
          label: __("Video Fit", "video-gallery"),
          labelPosition: "top",
          value: items?.video?.objectFit,
          onChange: (value) => updateObj("items", value, "video", "objectFit"),
          options: videoSizeOptions,
          Component: BButtonGroup,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default General;
