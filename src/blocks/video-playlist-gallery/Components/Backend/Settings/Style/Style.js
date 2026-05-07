import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  CardDivider,
} from "@wordpress/components";
import {
  Background,
  Typography,
  ShadowControl,
  ColorControl,
  BoxControl,
  Label,
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
  const { styles } = attributes;
  const { videoPlayer, sidebar, gallery } = styles;
  const { category, title, description } = videoPlayer?.info;

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
    "Background Color",
    "Description Typography",
    "Description Color",
    "Description Margin",
    "Category Typography",
    "Category Color",
    "Category Margin",
    "Category Padding",
    "Category Border",
    "Category Border Radius",
    "Category Shadow",
    "Category Background Color",
    "Gap",
    "Close Button Size",
    "Close Button Color",
    "Close Button Hover Background",
    "Close Button Padding",
    "Close Button Margin",
    "Close Button Border Radius",
    "Count Typography",
    "Count Color",
    "Count Margin",
    "Header Padding",
    "Header Bottom Border",
    "Video Metadata Typography",
    "Video Metadata Color",
    "Video Metadata Margin",
    "Playlist Padding",
    "Playlist Gap",
    "Active Item Background",
    "Active Item Border",
    "Item Inner Gap",
    "Item Inner Padding",
    "Item Inner Border Radius",
    "Item Hover Background Color",
    "Item Hover Title Color",
    "Thumbnail Width",
    "Thumbnail Border Radius",
    "Thumbnail Hover Overlay Color",
    "Duration Background Color",
    "Duration Color",
    "Duration Typography",
    "Duration Padding",
    "Duration Border Radius",
    "Typography",
    "Hover Item Background",
    "Hover Height",
    "Border Left",
  ]);

  return (
    <>
      {/* Gallery Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery", "video-gallery")}>
        {/* {renderComponentControl({
          label: "Max Width",
          value: gallery?.container?.maxWidth,
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery,val,"container","maxWidth"),
            }),
          Component: RangeControl,
          min: 200,
          max: 2000,
          defaultValue: gallery?.container?.maxWidth,
          isDeviceControl: true,
          ...premiumProps,
        })} */}

        {/* {renderComponentControl({
          label: "Background",
          value: gallery?.background,
          className: "mt20",
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              gallery: updateData(gallery,val,"background"),
            }),
          Component: Background,
          ...premiumProps,
        })} */}

        {renderComponentControl({
          label: __("Margin", "video-gallery"),
          values: gallery?.margin[device],
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "gallery", "margin", device),
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
              styles: updateData(styles, val, "gallery", "padding", device),
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
              styles: updateData(styles, val, "gallery", "border"),
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
              styles: updateData(
                styles,
                val,
                "gallery",
                "borderRadius",
                device,
              ),
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
              styles: updateData(styles, val, "gallery", "shadow"),
            }),
          Component: ShadowControl,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Player Container */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Video Player Container", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: "Background",
          value: videoPlayer?.background,
          className: "mt20",
          labelPosition: "left",
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "videoPlayer", "background"),
            }),
          Component: Background,
          ...premiumProps,
        })}
      </PanelBody>

      {/* Items Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Video Player Info", "video-gallery")}
        initialOpen={false}>
        {/* Category */}
        {renderComponentControl({
          label: "Category Typography",
          value: category?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "category",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Category Color", "video-gallery"),
          className: "mt20",
          value: category?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "category",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Category Background Color", "video-gallery"),
          className: "mt20",
          value: category?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "category",
                "backgroundColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Category Margin", "video-gallery"),
          className: "mt20",
          values: category?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "category",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Category Padding", "video-gallery"),
          className: "mt20",
          values: category?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "category",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Category Border", "video-gallery"),
          className: "mt20",
          value: category?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "category",
                "border",
              ),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Category Border Radius", "video-gallery"),
          className: "mt20",
          values: category?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "category",
                "borderRadius",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Title */}
        {renderComponentControl({
          label: __("Title Typography", "video-gallery"),
          className: "mt20",
          value: title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "title",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Color", "video-gallery"),
          className: "mt20",
          value: title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "title",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Margin", "video-gallery"),
          className: "mt20",
          values: title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "title",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Description */}
        {renderComponentControl({
          label: __("Description Typography", "video-gallery"),
          className: "mt20",
          value: description?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "description",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Description Color", "video-gallery"),
          className: "mt20",
          value: description?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "description",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Description Margin", "video-gallery"),
          className: "mt20",
          values: description?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "description",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* {renderComponentControl({
          label: "Bottom Overlay Color",
          className: "mt20",
          value: videoPlayer?.bottomOverlay,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","bottomOverlay"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })} */}

        {/* {renderComponentControl({
          label: "Border Radius",
          className: "mt20",
          values: videoPlayer?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","borderRadius",device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })} */}

        {/* {renderComponentControl({
          label: "Shadow",
          className: "mt20",
          value: videoPlayer?.shadow,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles,val,"videoPlayer","shadow"),
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
        })} */}

        {renderComponentControl({
          label: __("Padding", "video-gallery"),
          className: "mt20",
          values: videoPlayer?.info?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Gap", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.info?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "info",
                "gap",
                device,
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Player Controls", "video-playlist-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: __("Color", "video-gallery"),
          value: videoPlayer?.controls?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Hover Color", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.hoverColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "hoverColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Bottom Overlay Color", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.bottomOverlayColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "bottomOverlayColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Gap", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "gap",
                device,
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Padding", "video-gallery"),
          className: "mt20",
          values: videoPlayer?.controls?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />
        <Label>{__("Progress Bar", "video-playlist-gallery")}</Label>

        {renderComponentControl({
          label: __("Color", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "progressBar",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Height", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.height,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "progressBar",
                "height",
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Hover Height", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.hoverHeight,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "progressBar",
                "hoverHeight",
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        <CardDivider />
        <Label>{__("Progress Bar Thumb", "video-gallery")}</Label>

        {renderComponentControl({
          label: __("Size", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.sliderThumb?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "progressBar",
                "sliderThumb",
                "size",
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Color", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.sliderThumb?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "progressBar",
                "sliderThumb",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.progressBar?.sliderThumb?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "progressBar",
                "sliderThumb",
                "border",
              ),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border Radius", "video-gallery"),
          className: "mt20",
          values: videoPlayer?.controls?.progressBar?.sliderThumb?.borderRadius,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "progressBar",
                "sliderThumb",
                "borderRadius",
              ),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        <CardDivider />
        <Label>{__("Volume Range", "video-gallery")}</Label>

        {renderComponentControl({
          label: __("Color", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.volume?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "volume",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Height", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.volume?.height,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "volume",
                "height",
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        <CardDivider />
        <Label>{__("Volume Range Thumb", "video-gallery")}</Label>

        {renderComponentControl({
          label: __("Size", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.volume?.sliderThumb?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "volume",
                "sliderThumb",
                "size",
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Color", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.volume?.sliderThumb?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "volume",
                "sliderThumb",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.volume?.sliderThumb?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "volume",
                "sliderThumb",
                "border",
              ),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border Radius", "video-gallery"),
          className: "mt20",
          values: videoPlayer?.controls?.volume?.sliderThumb?.borderRadius,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "volume",
                "sliderThumb",
                "borderRadius",
              ),
            }),
          Component: BoxControl,
          ...premiumProps,
        })}

        <CardDivider />
        <Label>{__("Duration", "video-gallery")}</Label>

        {renderComponentControl({
          label: __("Color", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.duration?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "duration",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Typography", "video-gallery"),
          className: "mt20",
          value: videoPlayer?.controls?.duration?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "videoPlayer",
                "controls",
                "duration",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sidebar", "video-gallery")}
        initialOpen={false}>
        {/* Background */}
        {renderComponentControl({
          label: __("Background Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "sidebar", "background"),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {/* Width */}
        {renderComponentControl({
          label: __("Width", "video-gallery"),
          className: "mt20",
          value: sidebar?.width[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "sidebar", "width", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Border left */}
        {renderComponentControl({
          label: __("Border Left", "video-gallery"),
          className: "mt20",
          value: sidebar?.borderLeft,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "sidebar", "borderLeft"),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sidebar Header", "video-gallery")}
        initialOpen={false}>
        {/* Close Button */}
        {renderComponentControl({
          label: __("Close Button Size", "video-gallery"),
          value: sidebar?.header?.close?.size?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "close",
                "size",
                device,
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.header?.close?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "close",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Hover Background", "video-gallery"),
          className: "mt20",
          value: sidebar?.header?.close?.hoverBgColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "close",
                "hoverBgColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Padding", "video-gallery"),
          className: "mt20",
          values: sidebar?.header?.close?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "close",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Margin", "video-gallery"),
          className: "mt20",
          values: sidebar?.header?.close?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "close",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Border Radius", "video-gallery"),
          className: "mt20",
          values: sidebar?.header?.close?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "close",
                "borderRadius",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Title */}
        {renderComponentControl({
          label: __("Title Typography", "video-gallery"),
          className: "mt20",
          value: sidebar?.header?.title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "title",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.header?.title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "title",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Margin", "video-gallery"),
          className: "mt20",
          values: sidebar?.header?.title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "title",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Count */}
        {renderComponentControl({
          label: __("Count Typography", "video-gallery"),
          className: "mt20",
          value: sidebar?.header?.count?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "count",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Count Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.header?.count?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "count",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Count Margin", "video-gallery"),
          className: "mt20",
          values: sidebar?.header?.count?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "count",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Header Padding */}
        {renderComponentControl({
          label: __("Header Padding", "video-gallery"),
          className: "mt20",
          values: sidebar?.header?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Header Border */}
        {renderComponentControl({
          label: __("Header Bottom Border", "video-gallery"),
          className: "mt20",
          value: sidebar?.header?.borderBottom,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "header",
                "borderBottom",
              ),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sidebar Playlist", "video-gallery")}
        initialOpen={false}>
        {/* Playlist Info - Title */}
        {renderComponentControl({
          label: __("Title Typography", "video-gallery"),
          value: sidebar?.playlist?.info?.title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "title",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.info?.title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "title",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Margin", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.info?.title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "title",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Info - Subtitle */}
        {renderComponentControl({
          label: __("Subtitle Typography", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.info?.subtitle?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "subtitle",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Subtitle Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.info?.subtitle?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "subtitle",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Subtitle Margin", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.info?.subtitle?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "subtitle",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Info - Video Metadata */}
        {renderComponentControl({
          label: __("Video Metadata Typography", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.info?.videoMetadata?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "videoMetadata",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Metadata Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.info?.videoMetadata?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "videoMetadata",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Metadata Margin", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.info?.videoMetadata?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "info",
                "videoMetadata",
                "margin",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Padding */}
        {renderComponentControl({
          label: __("Playlist Padding", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Gap */}
        {renderComponentControl({
          label: __("Playlist Gap", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "gap",
                device,
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {/* Playlist Item Active */}
        {renderComponentControl({
          label: __("Active Item Background", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.playlistItemActive?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "playlistItemActive",
                "background",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Hover Item Background", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.playlistItemInner?.hoverBgColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "playlistItemInner",
                "hoverBgColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Active Item Border", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.playlistItemActive?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "playlistItemActive",
                "border",
              ),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}

        {/* Playlist Item Inner */}
        {renderComponentControl({
          label: __("Item Inner Gap", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.playlistItemInner?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "playlistItemInner",
                "gap",
                device,
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Item Inner Padding", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.playlistItemInner?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "playlistItemInner",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Item Inner Border Radius", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.playlistItemInner?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "playlistItemInner",
                "borderRadius",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Item Hover Background Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.playlistItemInner?.hoverBgColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "playlistItemInner",
                "hoverBgColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Item Hover Title Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.playlistItemInner?.hoverTitleColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "playlistItemInner",
                "hoverTitleColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {/* Thumbnail */}
        {renderComponentControl({
          label: __("Thumbnail Width", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.width,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "width",
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Thumbnail Border Radius", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "borderRadius",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Thumbnail Hover Overlay Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.overlayColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "overlayColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {/* Thumbnail Duration */}
        {renderComponentControl({
          label: __("Duration Background Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.duration?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "duration",
                "backgroundColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Duration Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.duration?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "duration",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Duration Typography", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.duration?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "duration",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Duration Padding", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.duration?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "duration",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Duration Border Radius", "video-gallery"),
          className: "mt20",
          values:
            sidebar?.playlist?.thumbnail?.duration?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "duration",
                "borderRadius",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Active Playing Badge", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: __("Background Color", "video-gallery"),
          value: sidebar?.playlist?.thumbnail?.activePlayBadge?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "activePlayBadge",
                "backgroundColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.activePlayBadge?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "activePlayBadge",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Typography", "video-gallery"),
          className: "mt20",
          value: sidebar?.playlist?.thumbnail?.activePlayBadge?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "activePlayBadge",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Padding", "video-gallery"),
          className: "mt20",
          values:
            sidebar?.playlist?.thumbnail?.activePlayBadge?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "activePlayBadge",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border Radius", "video-gallery"),
          className: "mt20",
          values:
            sidebar?.playlist?.thumbnail?.activePlayBadge?.borderRadius?.[
              device
            ],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "activePlayBadge",
                "borderRadius",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border", "video-gallery"),
          className: "mt20",
          values: sidebar?.playlist?.thumbnail?.activePlayBadge?.border,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "playlist",
                "thumbnail",
                "activePlayBadge",
                "border",
              ),
            }),
          Component: BorderBoxControl,
          ...premiumProps,
        })}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Up Next Toggle", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: __("Background Color", "video-gallery"),
          value: sidebar?.upNextToggle?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "upNextToggle",
                "backgroundColor",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Color", "video-gallery"),
          className: "mt20",
          value: sidebar?.upNextToggle?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "upNextToggle",
                "color",
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Typography", "video-gallery"),
          className: "mt20",
          value: sidebar?.upNextToggle?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "upNextToggle",
                "typography",
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Padding", "video-gallery"),
          className: "mt20",
          values: sidebar?.upNextToggle?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "upNextToggle",
                "padding",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Border Radius", "video-gallery"),
          className: "mt20",
          values: sidebar?.upNextToggle?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "upNextToggle",
                "borderRadius",
                device,
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Shadow", "video-gallery"),
          className: "mt20",
          value: sidebar?.upNextToggle?.shadow,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "sidebar",
                "upNextToggle",
                "shadow",
              ),
            }),
          Component: ShadowControl,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default Style;
