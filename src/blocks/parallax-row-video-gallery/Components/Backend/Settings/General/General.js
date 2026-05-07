import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  Button,
  Flex,
  Dashicon,
  __experimentalNumberControl as NumberControl,
  ToggleControl,
} from "@wordpress/components";
import {
  BButtonGroup,
  HelpPanel,
} from "../../../../../../../../bpl-tools/Components";
import LayerItemPanel from "../LayerItemPanel";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../../Components/Common/utils/functions";
import {
  updateAttributes,
  updateData,
} from "../../../../../../../../bpl-tools/utils/functions";
import { FrontShortCode } from "../../../../../../../../bpl-tools/ProControls";
import { videoSizeOptions } from "../../../../../../Components/Common/utils/options";

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
  setGroupIndex,
  itemsProps,
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
    "Lightbox",
  ]);

  const { videos = [], gallery, items } = attributes;
  const { orientation } = gallery;
  const updateObj = updateAttributes(attributes, setAttributes);
  const isGalleryPostType = currentPostType === "video-gallery-block";

  const addGroup = () => {
    const newGroup = [
      {
        id: Math.random().toString(36).slice(2, 11),
        title: "Title",
        subtitle: "Subtitle",
        video:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster:
          "https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/poster.jpg",
      },
    ];

    setAttributes({ videos: [...videos, newGroup] });

    setTimeout(() => {
      const panels = document.querySelectorAll(".bPlPanelBody");
      panels[panels.length - 1]?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const removeGroup = (index) => {
    if (videos.length <= 1) return;
    const newVideos = [...videos.slice(0, index), ...videos.slice(index + 1)];
    setAttributes({ videos: newVideos });
  };

  // function objValueChanger(value = "horizontal", attributes, device) {
  //   return produce(attributes, (draft) => {
  //     draft["gallery"]["orientation"] = value;

  //     switch (value) {
  //       case "horizontal":
  //         draft["items"]["padding"][device]["top"] = "1rem";
  //         draft["items"]["padding"][device]["bottom"] = "1rem";
  //         draft["items"]["padding"][device]["left"] = "0rem";
  //         draft["items"]["padding"][device]["right"] = "0rem";
  //         break;

  //       case "vertical":
  //         draft["items"]["padding"][device]["top"] = "1rem";
  //         draft["items"]["padding"][device]["bottom"] = "1rem";
  //         draft["items"]["padding"][device]["left"] = "1rem";
  //         draft["items"]["padding"][device]["right"] = "1rem";
  //         break;

  //       default:
  //         break;
  //     }
  //   });
  // }

  // // Handle change
  // function updateObjData(setAttributes, attributes, device, value) {
  //   setAttributes(objValueChanger(value, attributes, device));
  // }

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
        <span className="block-hint">
          <p>Add at least three videos to a row.</p>
        </span>

        {/* <span className="block-warning">
          <p>Warning: fewer than three videos may break the layout.</p>
        </span> */}

        {videos.map(
          (group, groupIndex) => (
            setGroupIndex(groupIndex),
            (
              <PanelBody
                key={groupIndex}
                className="bPlPanelBody"
                title={
                  __(
                    `Video ${orientation === "horizontal" ? "Row" : "Column"} `,
                  ) +
                  (groupIndex + 1)
                }
                initialOpen={false}>
                {videos.length > 1 && (
                  <Flex justify="end" className="mb10">
                    <Button
                      variant="secondary"
                      onClick={() => removeGroup(groupIndex)}
                      label={__("Remove Group")}
                      style={{
                        width: "100%",
                        display: " flex",
                        justifyContent: "center",
                      }}>
                      <Dashicon icon="trash" />
                      {__("Remove Group")}
                    </Button>
                  </Flex>
                )}

                <LayerItemPanel
                  attributes={attributes}
                  setAttributes={setAttributes}
                  groupIndex={groupIndex}
                  device={device}
                  itemsProps={itemsProps}
                  premiumProps={premiumProps}
                  clientId={clientId}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </PanelBody>
            )
          ),
        )}

        <Flex justify="center" className="mt10">
          <Button
            variant="primary"
            onClick={addGroup}
            label={__("Add New Group")}
            style={{
              width: "90%",
              display: " flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}>
            <span
              style={{
                display: " flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="dashicon dashicons dashicons-plus"
            />
            {__("Add New Group")}
          </Button>
        </Flex>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label:
            gallery?.orientation === "horizontal" ? "Column Gap" : "Row Gap",
          className: "mt20",
          value: gallery?.columnGap[device],
          onChange: (val) => updateObj("gallery", val, "columnGap", device),
          Component: NumberControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Row Gap",
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
          label: "Video Fit",
          labelPosition: "top",
          value: items?.video?.objectFit,
          onChange: (value) => updateObj("items", value, "video", "objectFit"),
          options: videoSizeOptions,
          Component: BButtonGroup,
          ...premiumProps,
        })}

        {renderComponentControl({
          className: "mt20",
          label: "Lightbox",
          checked: items?.video?.lightbox,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "lightbox"),
            }),
          Component: ToggleControl,
          ...premiumProps,
        })}

        {/* {renderComponentControl({
          label: "Orientation",
          labelPosition: "top",
          className: "mt20",
          value: gallery?.orientation,
          onChange: (value) =>
            updateObjData(setAttributes, attributes, device, value),
          options: galleryOriantation,
          Component: BButtonGroup,
          ...premiumProps,
        })} */}
      </PanelBody>
    </>
  );
};

export default General;
