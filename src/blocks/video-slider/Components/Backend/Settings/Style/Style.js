import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  RangeControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import {
  Background,
  Typography,
  ShadowControl,
  ColorControl,
  BoxControl,
  IconLibrary,
} from "../../../../../../../../bpl-tools/Components";

import {
  pxUnit,
  perUnit,
  emUnit,
} from "../../../../../../../../bpl-tools/utils/options";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../../Components/Common/utils/functions";

const Style = ({ attributes, setAttributes, device, premiumProps }) => {
  const { items, gallery } = attributes;

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
    "Max Width",
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
    "Width",
  ]);

  return (
    <>
      {/* Gallery Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery", "video-gallery")}>
        {renderComponentControl({
          label: "Max Width",
          value: gallery?.container?.maxWidth,
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "container", "maxWidth"),
            }),
          Component: RangeControl,
          min: 200,
          max: 2000,
          defaultValue: gallery?.container?.maxWidth,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Background", "video-gallery"),
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
          label: __("Margin", "video-gallery"),
          className: "mt20",
          values: gallery?.margin[device],
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery, val, "margin", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Padding", "video-gallery"),
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
          label: __("Border", "video-gallery"),
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
          label: __("Border Radius", "video-gallery"),
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
          label: __("Shadow", "video-gallery"),
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
        {items?.title?.show && (
          <>
            {renderComponentControl({
              label: __("Title Typography", "video-gallery"),
              value: items?.title?.typography,
              onChange: (val) =>
                setAttributes({
                  items: updateData(items, val, "title", "typography"),
                }),
              Component: Typography,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: __("Title Color", "video-gallery"),
              className: "mt20",
              value: items?.title?.color,
              onChange: (val) =>
                setAttributes({
                  items: updateData(items, val, "title", "color"),
                }),
              Component: ColorControl,
              ...premiumProps,
            })}

            {renderComponentControl({
              label: __("Title Margin", "video-gallery"),
              className: "mt20",
              values: items?.title?.margin?.[device],
              onChange: (val) =>
                setAttributes({
                  items: updateData(items, val, "title", "margin", device),
                }),
              Component: BoxControl,
              isDeviceControl: true,
              ...premiumProps,
            })}
          </>
        )}

        {/*Star Ratings */}
        {renderComponentControl({
          label: __("Rating Size", "video-gallery"),
          className: "mt20",
          value: items?.rating?.size?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "rating", "size", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Rating Margin", "video-gallery"),
          className: "mt20",
          values: items?.rating?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "rating", "margin", device),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Rating Gap", "video-gallery"),
          className: "mt20",
          value: items?.rating?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "rating", "gap", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Rating Color", "video-gallery"),
          className: "mt20",
          value: items?.rating?.color,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "rating", "color"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Overlay Color", "video-gallery"),
          className: "mt20",
          value: items?.overlay,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "overlay"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Hover Overlay Opacity", "video-gallery"),
          className: "mt20",
          value: items?.hoverOpacity,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "hoverOpacity"),
            }),
          min: 0,
          max: 1,
          step: 0.1,
          Component: NumberControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Bottom Overlay Color", "video-gallery"),
          className: "mt20",
          value: items?.bottomOverlay,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "bottomOverlay"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Info Padding", "video-gallery"),
          className: "mt20",
          values: items?.info?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "info", "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border Radius", "video-gallery"),
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
          label: __("Shadow", "video-gallery"),
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
          label: __("Padding", "video-gallery"),
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
          label: __("Width", "video-gallery"),
          className: "mt20",
          value: items?.video?.width[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "width", device),
            }),
          Component: RangeControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1000,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Height", "video-gallery"),
          className: "mt20",
          value: items?.video?.height[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "video", "height", device),
            }),
          Component: RangeControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1000,
          isDeviceControl: true,
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
          value: items?.playBtn?.bg,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "bg"),
            }),
          Component: ColorControl,
          labelPosition: "left",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Background Hover Color", "video-gallery"),
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
          label: __("Icon Stroke Color", "video-gallery"),
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
          label: __("Icon Fill Color", "video-gallery"),
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
          label: __("Icon Size", "video-gallery"),
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
          label: __("Border Radius", "video-gallery"),
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
          label: __("Padding", "video-gallery"),
          className: "mt20",
          values: items?.playBtn?.padding,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "padding"),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Hover Padding", "video-gallery"),
          className: "mt20",
          values: items?.playBtn?.hoverPadding,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "hoverPadding"),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Scale on Hover", "video-gallery"),
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

        {renderComponentControl({
          label: __("Icon", "video-gallery"),
          value: items?.playBtn?.icon,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "icon"),
            }),
          Component: IconLibrary,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Shadow", "video-gallery"),
          value: items?.playBtn?.shadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "shadow"),
            }),
          Component: ShadowControl,
          className: "mt20",
          ...premiumProps,
        })}
      </PanelBody>

      {/* Navigation Button Control */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Navigation Button", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: __("Next Icon", "video-gallery"),
          value: items?.navigation?.nextIcon,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "nextIcon"),
            }),
          Component: IconLibrary,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Previous Icon", "video-gallery"),
          value: items?.navigation?.prevIcon,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "prevIcon"),
            }),
          Component: IconLibrary,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Background Color", "video-gallery"),
          value: items?.navigation?.bgColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "bgColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Background Hover Color", "video-gallery"),
          value: items?.navigation?.hoverBgColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "hoverBgColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Icon Stroke Color", "video-gallery"),
          value: items?.navigation?.iconStrokeColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "iconStrokeColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Icon Fill Color", "video-gallery"),
          value: items?.navigation?.iconFillColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "iconFillColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Icon Stroke Hover Color", "video-gallery"),
          value: items?.navigation?.iconStrokeHoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "navigation",
                "iconStrokeHoverColor",
              ),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Icon Fill Hover Color", "video-gallery"),
          value: items?.navigation?.iconFillHoverColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "iconFillHoverColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Padding", "video-gallery"),
          className: "mt20",
          values: items?.navigation?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "padding", device),
            }),
          Component: BoxControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Icon Size", "video-gallery"),
          className: "mt20",
          value: items?.navigation?.iconSize?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "iconSize", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border", "video-gallery"),
          value: items?.navigation?.border,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "border"),
            }),
          Component: BorderBoxControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Scale on Hover", "video-gallery"),
          className: "mt20",
          value: items?.navigation?.scaleEffect,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "scaleEffect"),
            }),
          min: 0,
          max: 2,
          step: 0.1,
          Component: NumberControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border Radius", "video-gallery"),
          values: items?.navigation?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "navigation",
                "borderRadius",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Shadow", "video-gallery"),
          value: items?.navigation?.shadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "shadow"),
            }),
          Component: ShadowControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Hover Shadow", "video-gallery"),
          value: items?.navigation?.hoverShadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "navigation", "hoverShadow"),
            }),
          Component: ShadowControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Vertical Position", "video-gallery"),
          value: items?.navigation?.position?.vertical?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "navigation",
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
          label: __("Horizontal Position", "video-gallery"),
          value: items?.navigation?.position?.horizontal?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(
                items,
                val,
                "navigation",
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
      </PanelBody>

      {/* Navigation Dots Control */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Dots", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: "Size",
          value: items?.dots?.size?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "size", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Gap", "video-gallery"),
          className: "mt20",
          value: items?.dots?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "gap", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Color", "video-gallery"),
          value: items?.dots?.bgColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "bgColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Active Color", "video-gallery"),
          value: items?.dots?.bgActiveColor,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "bgActiveColor"),
            }),
          Component: ColorControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border Radius", "video-gallery"),
          className: "mt20",
          values: items?.dots?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "borderRadius", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border", "video-gallery"),
          value: items?.dots?.border,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "border"),
            }),
          Component: BorderBoxControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Active Border", "video-gallery"),
          value: items?.dots?.activeBorder,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "activeBorder"),
            }),
          Component: BorderBoxControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Active Scale", "video-gallery"),
          className: "mt20",
          value: items?.dots?.activeScaleEffect,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "activeScaleEffect"),
            }),
          min: 0,
          max: 2,
          step: 0.1,
          Component: NumberControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Shadow", "video-gallery"),
          value: items?.dots?.shadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "shadow"),
            }),
          Component: ShadowControl,
          className: "mt20",
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Margin", "video-gallery"),
          values: items?.dots?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "dots", "margin", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          className: "mt20",
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default Style;
