import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  __experimentalNumberControl as NumberControl,
  SelectControl,
} from "@wordpress/components";
import {
  Background,
  Typography,
  ShadowControl,
  ColorControl,
  BoxControl,
} from "../../../../../../../../bpl-tools/Components";

import {
  pxUnit,
  perUnit,
  emUnit,
} from "../../../../../../../../bpl-tools/utils/options";
import {
  updateAttributes,
  updateData,
} from "../../../../../../../../bpl-tools/utils/functions";
import {
  limitPercentageTo100,
  renderComponentControl,
  setFreeFields,
} from "../../../../../../Components/Common/utils/functions";
import { controlsDirection } from "../../../../../../Components/Common/utils/options";

const Style = ({ attributes, setAttributes, device, premiumProps }) => {
  const { items, gallery } = attributes;
  const updateObj = updateAttributes(attributes, setAttributes);

  setFreeFields([
    "Background",
    "Padding",
    "Border",
    "Shadow",
    "Title Margin",
    "title typography",
    "title color",
    "Subtitle Margin",
    "Subtitle Typography",
    "Subtitle Color",
    "Border Radius",
    "Info Background Color",
    "Maximum Width",
    "Height",
    "Indicator Color",
    "Info Padding",
    "Icon Size",
    "Stroke Width",
    "Time Typography",
    "Controls Gap",
    "Padding",
    "Overlay Color",
    "color",
    "Rating Color",
    "Rating Gap",
    "Rating Margin",
    "Rating Size",
    "Bottom Overlay Color",
    "Hover Overlay Color",
    "Hover Overlay Opacity",
    "Background Color",
    "Background Hover Color",
    "Icon Stroke Color",
    "Icon Fill Color",
    "Button",
    "Size",
    "Icon Size",
    "Border Radius",
    "Icon",
    "Scale on Hover",
    "Hover Padding",
    "Hover Background Color",
    "Hover Color",
    "Hover Box Shadow",
    "Hover Scale",
    "gap",
    "margin",
    "Active Scale",
    "Active Color",
    "Hover Shadow",
    "Vertical Position",
    "Horizontal Position",
    "Icon Stroke Hover Color",
    "Icon Fill Hover Color",
    "Next Icon",
    "Previous Icon",
    "Active Border",
    "Minimum Width",
    "Text Shadow",
    "blur",
    "Controls Direction",
    "Progress Background Color",
    "Progress Height",
    "Progress Bar Color",
  ]);

  return (
    <>
      {/* Gallery Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery", "video-gallery")}>
        {renderComponentControl({
          label: "Background",
          value: gallery?.background,
          className: "mt20",
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "background"),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: gallery?.padding[device],
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border",
          className: "mt20",
          value: gallery?.border,
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "border"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: gallery?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "borderRadius", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Shadow",
          className: "mt20",
          value: gallery?.shadow,
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "shadow"),
            }),
          Component: ShadowControl,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Items Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Items", "video-gallery")}
        initialOpen={false}>
        {items?.info?.title?.show && (
          <>
            {renderComponentControl({
              label: "Title Typography",
              value: items?.info?.title?.typography,
              onChange: (val) =>
                updateObj("items", val, "info", "title", "typography"),
              Component: Typography,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Title Color",
              className: "mt20",
              value: items?.info?.title?.color,
              onChange: (val) =>
                updateObj("items", val, "info", "title", "color"),
              Component: ColorControl,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Title Margin",
              className: "mt20",
              values: items?.info?.title?.margin?.[device],
              onChange: (val) =>
                updateObj("items", val, "info", "title", "margin", device),
              Component: BoxControl,
              isDeviceControl: true,
              ...premiumProps,
            })}
          </>
        )}

        {items?.info?.subtitle?.show && (
          <>
            {renderComponentControl({
              label: "Subtitle Typography",
              className: "mt20",
              value: items?.info?.subtitle?.typography,
              onChange: (val) =>
                updateObj("items", val, "info", "subtitle", "typography"),
              Component: Typography,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Subtitle Color",
              className: "mt20",
              value: items?.info?.subtitle?.color,
              onChange: (val) =>
                updateObj("items", val, "info", "subtitle", "color"),
              Component: ColorControl,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: "Subtitle Margin",
              className: "mt20",
              values: items?.info?.subtitle?.margin?.[device],
              onChange: (val) =>
                updateObj("items", val, "info", "subtitle", "margin", device),
              Component: BoxControl,
              isDeviceControl: true,
              ...premiumProps,
            })}
          </>
        )}

        {renderComponentControl({
          label: "Text Shadow",
          className: "mt20",
          value: items?.info?.textShadow,
          onChange: (val) => updateObj("items", val, "info", "textShadow"),
          Component: ShadowControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Info Padding",
          className: "mt20",
          values: items?.info?.padding?.[device],
          onChange: (val) => updateObj("items", val, "info", "padding", device),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Overlay Color",
          className: "mt20",
          value: items?.overlayColor,
          onChange: (val) => updateObj("items", val, "overlayColor"),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Bottom Overlay Color",
          className: "mt20",
          value: items?.bottomOverlayColor,
          onChange: (val) => updateObj("items", val, "bottomOverlayColor"),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: items?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "borderRadius", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Shadow",
          className: "mt20",
          value: items?.shadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "shadow"),
            }),
          Component: ShadowControl,
          defaults: [
            {
              hOffset: "0px",
              vOffset: "20px",
              blur: "25px",
              spreed: "-5px",
              color: "rgba(0, 0, 0, 0)",
              isInset: false,
            },
          ],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Padding",
          className: "mt20",
          values: items?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Video Width and Height */}
        {renderComponentControl({
          label: "Minimum Width",
          className: "mt20",
          value: items?.video?.minWidth[device],
          onChange: limitPercentageTo100(setAttributes, "video", items, [
            "minWidth",
            device,
          ]),
          // onChange: (val) =>
          //   setAttributes({
          //     items: updateData(items, val, "video", "minWidth", device),
          //   }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1000,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Maximum Width",
          className: "mt20",
          value: items?.video?.maxWidth[device],
          onChange: limitPercentageTo100(setAttributes, "video", items, [
            "maxWidth",
            device,
          ]),
          // onChange: (val) =>
          //   setAttributes({
          //     items: updateData(items, val, "video", "maxWidth", device),
          //   }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1000,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Height",
          className: "mt20",
          value: items?.video?.height[device],
          onChange: limitPercentageTo100(setAttributes, "video", items, [
            "height",
            device,
          ]),
          // onChange: (val) =>
          //   setAttributes({
          //     items: updateData(items, val, "video", "height", device),
          //   }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1000,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Scale on Hover",
          className: "mt20",
          value: items?.hoverScaleEffect,
          onChange: (val) => updateObj("items", val, "hoverScaleEffect"),
          min: 0,
          max: 2,
          step: 0.01,
          Component: NumberControl,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Play Button Controls */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Play Button", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: "Background Color",
          value: items?.playBtn?.bgColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "bgColor"),
            }),
          Component: ColorControl,
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Background Hover Color",
          value: items?.playBtn?.bgHoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "bgHoverColor"),
            }),
          labelPosition: "left",
          className: "mt20",
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Stroke Color",
          value: items?.playBtn?.iconStrokeColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "iconStrokeColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Fill Color",
          value: items?.playBtn?.iconFillColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "iconFillColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Blur",
          className: "mt20",
          value: items?.playBtn?.blur,
          onChange: (val) => updateObj("items", val, "playBtn", "blur"),
          min: 0,
          // max: 2,
          step: 0.1,
          units: [pxUnit()],
          Component: UnitControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Size",
          className: "mt20",
          value: items?.playBtn?.size?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "size", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Size",
          className: "mt20",
          value: items?.playBtn?.iconSize?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "iconSize", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          values: items?.playBtn?.borderRadius,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "borderRadius"),
            }),
          Component: BoxControl,
          units: [pxUnit(), perUnit(), emUnit()],
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Scale on Hover",
          className: "mt20",
          value: items?.playBtn?.scaleEffect,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "scaleEffect"),
            }),
          min: 0,
          max: 2,
          step: 0.1,
          Component: NumberControl,
          ...premiumProps,
        })}

        {/* {renderComponentControl({
          label: "Icon",
          value: items?.playBtn?.icon,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "icon"),
            }),
          Component: IconLibrary,
          className: "mt20",
          ...premiumProps,
        })} */}
      </PanelBody>

      {/* Controls */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Controls", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: "Background Color",
          value: items?.controls?.bgColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "bgColor"),
            }),
          Component: ColorControl,
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Background Hover Color",
          value: items?.controls?.bgHoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "bgHoverColor"),
            }),
          labelPosition: "left",
          className: "mt20",
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Stroke Color",
          value: items?.controls?.iconStrokeColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "iconStrokeColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Fill Color",
          value: items?.controls?.iconFillColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "iconFillColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Gap",
          className: "mt20",
          value: items?.controls?.gap?.[device],
          onChange: (val) => updateObj("items", val, "controls", "gap", device),
          min: 0,
          // max: 2,
          step: 0.1,
          Component: UnitControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Blur",
          className: "mt20",
          value: items?.controls?.blur,
          onChange: (val) => updateObj("items", val, "controls", "blur"),
          min: 0,
          // max: 2,
          step: 0.1,
          Component: UnitControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Size",
          className: "mt20",
          value: items?.controls?.size?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "size", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Icon Size",
          className: "mt20",
          value: items?.controls?.iconSize?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "iconSize", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Border Radius",
          values: items?.controls?.borderRadius,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "controls", "borderRadius"),
            }),
          Component: BoxControl,
          units: [pxUnit(), perUnit(), emUnit()],
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Vertical Position",
          value: items?.controls?.position?.vertical?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "position",
                "vertical",
                device,
              ),
            }),
          step: 1,
          Component: UnitControl,
          isDeviceControl: true,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Horizontal Position",
          value: items?.controls?.position?.horizontal?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "controls",
                "position",
                "horizontal",
                device,
              ),
            }),
          step: 1,
          Component: UnitControl,
          isDeviceControl: true,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Controls Direction",
          className: "mt20",
          labelPosition: "top",
          value: items?.controls?.direction,
          onChange: (value) =>
            updateObj("items", value, "controls", "direction"),
          options: controlsDirection,
          Component: SelectControl,
          ...premiumProps,
        })}

        {/* Progress */}
        {renderComponentControl({
          label: "Progress Height",
          className: "mt20",
          labelPosition: "top",
          value: items?.controls?.progress?.height,
          onChange: (value) =>
            updateObj("items", value, "controls", "progress", "height"),
          Component: UnitControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Progress Background Color",
          className: "mt20",
          labelPosition: "top",
          value: items?.controls?.progress?.bgColor,
          onChange: (value) =>
            updateObj("items", value, "controls", "progress", "bgColor"),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: "Progress Bar Color",
          className: "mt20",
          labelPosition: "top",
          value: items?.controls?.progress?.barColor,
          onChange: (value) =>
            updateObj("items", value, "controls", "progress", "barColor"),
          Component: ColorControl,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default Style;
