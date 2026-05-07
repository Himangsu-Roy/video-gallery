import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  RangeControl,
  __experimentalNumberControl as NumberControl,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  PanelRow,
} from "@wordpress/components";

import {
  Background,
  Typography,
  ShadowControl,
  ColorControl,
  BoxControl,
  IconLibrary,
  Label,
  Device,
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
import { videoHeightOptions } from "../../../../../../Components/Common/utils/options";

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
    "Middle Overlay Color",
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
    "Active Border",
    "Width",
    "",
    "Scale on Default",
    "Close Button Size",
    "Close Button Color",
    "Show Close Button",
    "Close on Click Outside",
    "Background Color",
    "Enable Lightbox",
  ]);

  return (
    <>
      {/* Gallery Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery", "video-gallery")}>
        {renderComponentControl({
          label: __("Max Width", "video-gallery"),
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

        {renderComponentControl({
          label: __("Middle Overlay Color", "video-gallery"),
          className: "mt20",
          value: items?.middleOverlay,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "middleOverlay"),
            }),
          Component: ColorControl,
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

        <PanelRow className="mt20">
          <Label className="">{__("Video Height", "video-gallery")}</Label>
          <Device />
        </PanelRow>
        <ToggleGroupControl
          // __next40pxDefaultSize
          isBlock
          value={items?.video?.type}
          onChange={(value) =>
            setAttributes({
              items: updateData(items, value, "video", "type"),
            })
          }>
          {videoHeightOptions.map((option) => (
            <ToggleGroupControlOption
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </ToggleGroupControl>

        {/* Video Height */}
        {items?.video?.type === "tall" &&
          renderComponentControl({
            label: "",
            value: items?.video?.tallHeight?.[device],
            labelPosition: "left",
            onChange: (val) =>
              setAttributes({
                items: updateData(items, val, "video", "tallHeight", device),
              }),
            Component: UnitControl,
            ...premiumProps,
          })}

        {items?.video?.type === "medium" &&
          renderComponentControl({
            label: "",
            value: items?.video?.mediumHeight?.[device],
            labelPosition: "left",
            onChange: (val) =>
              setAttributes({
                items: updateData(items, val, "video", "mediumHeight", device),
              }),
            Component: UnitControl,
            ...premiumProps,
          })}

        {items?.video?.type === "short" &&
          renderComponentControl({
            label: "",
            value: items?.video?.shortHeight?.[device],
            labelPosition: "left",
            onChange: (val) =>
              setAttributes({
                items: updateData(items, val, "video", "shortHeight", device),
              }),
            Component: UnitControl,
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
          label: __("Size", "video-gallery"),
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
          label: __("Scale on Default", "video-gallery"),
          className: "mt20",
          value: items?.playBtn?.scaleEffect,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "scaleEffect"),
            }),
          min: 0,
          max: 2,
          step: 0.01,
          Component: NumberControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label:  __("Scale on Hover", "video-gallery"),
          className: "mt20",
          value: items?.playBtn?.hoverScaleEffect,
          onChange: (val) =>
            setAttributes({
              items: updateData(items, val, "playBtn", "hoverScaleEffect"),
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
          defaults: items?.playBtn?.icon,
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

      {items?.lightbox?.enabled && (
        <>
          {/* Lightbox Controls */}
          <PanelBody
            className="bPlPanelBody"
            title={__("Lightbox", "video-gallery")}
            initialOpen={false}>
            {renderComponentControl({
              label: __("Background Color", "video-gallery"),
              value: items?.lightbox?.backgroundColor,
              onChange: (val) =>
                setAttributes({
                  items: updateData(items, val, "lightbox", "backgroundColor"),
                }),
              Component: ColorControl,
              ...premiumProps,
            })}

            {items?.lightbox?.showCloseButton && (
              <>
                {renderComponentControl({
                  label: __("Close Button Color", "video-gallery"),
                  className: "mt20",
                  value: items?.lightbox?.closeButtonColor,
                  onChange: (val) =>
                    setAttributes({
                      items: updateData(
                        items,
                        val,
                        "lightbox",
                        "closeButtonColor",
                      ),
                    }),
                  Component: ColorControl,
                  ...premiumProps,
                })}

                {renderComponentControl({
                  label: __("Close Button Size", "video-gallery"),
                  className: "mt20",
                  value: items?.lightbox?.closeButtonSize?.[device],
                  onChange: (val) =>
                    setAttributes({
                      items: updateData(
                        items,
                        val,
                        "lightbox",
                        "closeButtonSize",
                        device,
                      ),
                    }),
                  Component: UnitControl,
                  isDeviceControl: true,
                  ...premiumProps,
                })}
              </>
            )}
          </PanelBody>
        </>
      )}
    </>
  );
};

export default Style;
