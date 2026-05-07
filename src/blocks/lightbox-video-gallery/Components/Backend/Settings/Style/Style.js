import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
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
    "Width",
    "Height",
    "Info Padding",
    "Padding",
    "Overlay Color",
    "color",
    "Background Color",
    "Border Radius",
    "Hover Padding",
    "Hover Background Color",
    "Hover Color",
    "Hover Scale",
    "gap",
    "margin",
    "Hover Shadow",
  ]);

  return (
    <>
      {/* Gallery Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery", "video-gallery")}>
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
        {renderComponentControl({
          label: __("Title Typography", "video-gallery"),
          value: items?.info?.title?.typography,
          onChange: (val) =>
            updateObj("items", val, "info", "title", "typography"),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Color", "video-gallery"),
          className: "mt20",
          value: items?.info?.title?.color,
          onChange: (val) => updateObj("items", val, "info", "title", "color"),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Margin", "video-gallery"),
          className: "mt20",
          values: items?.info?.title?.margin?.[device],
          onChange: (val) =>
            updateObj("items", val, "info", "title", "margin", device),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Subtitle Typography", "video-gallery"),
          className: "mt20",
          value: items?.info?.subtitle?.typography,
          onChange: (val) =>
            updateObj("items", val, "info", "subtitle", "typography"),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Subtitle Color", "video-gallery"),
          className: "mt20",
          value: items?.info?.subtitle?.color,
          onChange: (val) =>
            updateObj("items", val, "info", "subtitle", "color"),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Subtitle Margin", "video-gallery"),
          className: "mt20",
          values: items?.info?.subtitle?.margin?.[device],
          onChange: (val) =>
            updateObj("items", val, "info", "subtitle", "margin", device),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Info Padding", "video-gallery"),
          className: "mt20",
          values: items?.info?.padding?.[device],
          onChange: (val) => updateObj("items", val, "info", "padding", device),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border", "video-gallery"),
          className: "mt20",
          value: items?.border,
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "border"),
            }),
          Component: BorderBoxControl,
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
          label: __("Hover Shadow", "video-gallery"),
          className: "mt20",
          value: items?.hoverShadow,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "hoverShadow"),
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
          label: __("Margin", "video-gallery"),
          className: "mt20",
          values: items?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "margin", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
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

        {renderComponentControl({
          label: __("Background", "video-gallery"),
          value: items?.background,
          className: "mt20",
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "background"),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Width", "video-gallery"),
          className: "mt20",
          value: items?.video?.width[device],
          onChange: limitPercentageTo100(setAttributes, "video", items, [
            "width",
            device,
          ]),
          Component: UnitControl,
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
          onChange: limitPercentageTo100(setAttributes, "video", items, [
            "height",
            device,
          ]),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          labelPosition: "left",
          min: 100,
          max: 1000,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* {renderComponentControl({
          label: "Scale on Hover",
          className: "mt20",
          value: items?.hoverScaleEffect,
          onChange: (val) => updateObj("items", val, "hoverScaleEffect"),
          min: 0,
          max: 2,
          step: 0.01,
          Component: NumberControl,
          ...premiumProps,
        })} */}
      </PanelBody>
    </>
  );
};

export default Style;
