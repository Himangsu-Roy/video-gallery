import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  CardDivider,
  RangeControl,
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
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../../Components/Common/utils/functions";

const Style = ({ attributes, setAttributes, device, premiumProps }) => {
  const { styles } = attributes;
  const { items, lightbox, gallery } = styles;

  setFreeFields([
    "Background",
    "Padding",
    "Border",
    "Shadow",
    "Margin",
    "Border Radius",
    "Max Width",
    "Gap",
    "Width",
    "Title Color",
    "Title Typography",
    "Title Margin",
    "Product Pricing Gap",
    "Product Price Gap",
    "Product Current Price Color",
    "Product Current Price Typography",
    "Product Current Price Margin",
    "Product Original Price Typography",
    "Product Original Price Color",
    "Product Original Price Margin",
    "Product Info Padding",
    "Product Info Gap",
    "Product Info Radius",
    "Product Image Size",
    "Product Image Radius",
    "Video Preview Overlay Color",
    "Video Preview Radius",
    "Video Preview Margin",
    "Video Border Radius",
    "Video Gap",
    "Video Side Width",
    "Video Center Width",
    "Video Height",
    "Buttons Size",
    "Buttons Background Color",
    "Buttons Icon Color",
    "Buttons Background Blur",
    "Buttons Icons Size",
    "Product Info Background Color",
    "Product Info Background Blur",
    "Product Info Border Radius",
    "Product Info Title Typography",
    "Product Info Title Color",
    "Product Current Price Typography",
    "Product Current Price Color",
    "Product Pricing Gap",
    "Info Button Background Color",
    "Info Button Text Color",
    "Info Button Typography",
    "Info Wrapper Background",
    "Info Wrapper Padding",
    "Product Info Title Margin",
    "Info Button Border Radius",
    "Info Button Padding",
    "Buttons Border Radius",
    "Close Button Size",
    "Close Button Background Color",
    "Close Button Hover Background Color",
    "Close Button Icon Size",
    "Close Button Icon Color",
    "Close Button Border Radius",
    "Product Current Price Currency Size",
    "Product Original Price Currency Size",
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
              styles: updateData(
                styles,
                val,
                "gallery",
                "container",
                "maxWidth"
              ),
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
              styles: updateData(styles, val, "gallery", "background"),
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
                device
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

      {/* Items Panel */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Items", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: __("Gap", "video-gallery"),
          value: items?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "items", "gap", device),
            }),
          Component: UnitControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Padding", "video-gallery"),
          className: "mt20",
          values: items?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "items", "padding", device),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Width", "video-gallery"),
          className: "mt20",
          value: items?.width?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "items", "width", device),
            }),
          Component: UnitControl,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Title Color", "video-gallery"),
          className: "mt20",
          value: items?.info?.title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "title",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Typography", "video-gallery"),
          className: "mt20",
          value: items?.info?.title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "title",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Title Margin", "video-gallery"),
          className: "mt20",
          values: items?.info?.title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "title",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Pricing Gap", "video-gallery"),
          className: "mt20",
          value: items?.info?.productPricing?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "gap",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Current Price Color", "video-gallery"),
          className: "mt20",
          value: items?.info?.productPricing?.currentPrice?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "currentPrice",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Current Price Typography", "video-gallery"),
          className: "mt20",
          value: items?.info?.productPricing?.currentPrice?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "currentPrice",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Current Price Margin", "video-gallery"),
          className: "mt20",
          values: items?.info?.productPricing?.currentPrice?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "currentPrice",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Current Price Currency Size", "video-gallery"),
          className: "mt20",
          value:
            items?.info?.productPricing?.currentPrice?.currencySize?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "currentPrice",
                "currencySize",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Original Price Typography", "video-gallery"),
          className: "mt20",
          value: items?.info?.productPricing?.originalPrice?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "originalPrice",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Original Price Color", "video-gallery"),
          className: "mt20",
          value: items?.info?.productPricing?.originalPrice?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "originalPrice",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Original Price Margin", "video-gallery"),
          className: "mt20",
          values: items?.info?.productPricing?.originalPrice?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "originalPrice",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Original Price Currency Size", "video-gallery"),
          className: "mt20",
          value:
            items?.info?.productPricing?.originalPrice?.currencySize?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productPricing",
                "originalPrice",
                "currencySize",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Info Padding", "video-gallery"),
          className: "mt20",
          values: items?.info?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "padding",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Info Gap", "video-gallery"),
          className: "mt20",
          value: items?.info?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "items", "info", "gap", device),
            }),
          Component: UnitControl,
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
          label: __("Product Info Radius", "video-gallery"),
          className: "mt20",
          values: items?.info?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Image Size", "video-gallery"),
          className: "mt20",
          value: items?.info?.productImage?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productImage",
                "size"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Image Radius", "video-gallery"),
          className: "mt20",
          values: items?.info?.productImage?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "info",
                "productImage",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Video Preview Overlay Color", "video-gallery"),
          className: "mt20",
          value: items?.preview?.overlayColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "preview",
                "overlayColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Preview Radius", "video-gallery"),
          className: "mt20",
          values: items?.preview?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "preview",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Preview Margin", "video-gallery"), 
          className: "mt20",
          values: items?.preview?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "items",
                "preview",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>

      {/*lightbox*/}
      <PanelBody
        className="bPlPanelBody"
        title={__("Lightbox", "video-gallery")}
        initialOpen={false}>
        {renderComponentControl({
          label: "Background",
          value: lightbox?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "background"),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Border Radius", "video-gallery"),
          className: "mt20",
          values: lightbox?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Gap", "video-gallery"),
          className: "mt20",
          value: lightbox?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "gap", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Side Width", "video-gallery"),
          className: "mt20",
          value: lightbox?.sideWidth?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "sideWidth", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Center Width", "video-gallery"),
          className: "mt20",
          value: lightbox?.centerMaxWidth?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "centerMaxWidth",
                device
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Video Height", "video-gallery"),
          className: "mt20",
          value: lightbox?.height?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "height", device),
            }),
          Component: UnitControl,
          units: [pxUnit(), perUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Buttons Size", "video-gallery"),
          className: "mt20",
          value: lightbox?.buttons?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "buttons", "size"),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Buttons Background Color", "video-gallery"),
          className: "mt20",
          values: lightbox?.buttons?.bgColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "buttons", "bgColor"),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Buttons Icon Color", "video-gallery"),
          className: "mt20",
          values: lightbox?.buttons?.iconColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "buttons",
                "iconColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Buttons Background Blur", "video-gallery"),
          className: "mt20",
          value: lightbox?.buttons?.blur,
          onChange: (val) =>
            setAttributes({
              styles: updateData(styles, val, "lightbox", "buttons", "blur"),
            }),
          Component: RangeControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Buttons Icons Size", "video-gallery"),
          className: "mt20",
          value: lightbox?.buttons?.iconSize,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "buttons",
                "iconSize"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Buttons Border Radius", "video-gallery"),
          className: "mt20",
          values: lightbox?.buttons?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "buttons",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Info Wrapper Background", "video-gallery"),
          className: "mt20",
          value: lightbox?.infoWrapper?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "infoWrapper",
                "background"
              ),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Info Wrapper Padding", "video-gallery"),
          className: "mt20",
          values: lightbox?.infoWrapper?.padding[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "infoWrapper",
                "padding",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Info Background Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.background,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "background"
              ),
            }),
          Component: Background,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Info Background Blur", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.blur,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "blur"
              ),
            }),
          Component: RangeControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Info Border Radius", "video-gallery"),
          className: "mt20",
          values: lightbox?.productInfo?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Info Padding", "video-gallery"),
          className: "mt20",
          values: lightbox?.productInfo?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "padding",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Info Gap", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "gap",
                device
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Image Size", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.productImage?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productImage",
                "size"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Image Radius", "video-gallery"),
          className: "mt20",
          values: lightbox?.productInfo?.productImage?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productImage",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Info Title Typography", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.title?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "title",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Info Title Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.title?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "title",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Info Title Margin", "video-gallery"),
          className: "mt20",
          values: lightbox?.productInfo?.title?.margin?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "title",
                "margin",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Current Price Typography", "video-gallery"),
          className: "mt20",
          value:
            lightbox?.productInfo?.productPricing?.currentPrice?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "currentPrice",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Current Price Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.productPricing?.currentPrice?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "currentPrice",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Current Price Currency Size", "video-gallery"),
          className: "mt20",
          value:
            lightbox?.productInfo?.productPricing?.currentPrice?.currencySize?.[
              device
            ],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "currentPrice",
                "currencySize",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Product Original Price Typography", "video-gallery"),
          className: "mt20",
          value:
            lightbox?.productInfo?.productPricing?.orginalPrice?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "orginalPrice",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Original Price Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.productPricing?.orginalPrice?.color,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "orginalPrice",
                "color"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Original Price Currency Size", "video-gallery"),
          className: "mt20",
          value:
            lightbox?.productInfo?.productPricing?.originalPrice
              ?.currencySize?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "originalPrice",
                "currencySize",
                device
              ),
            }),
          Component: UnitControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Product Pricing Gap", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.productPricing?.gap?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "productPricing",
                "gap",
                device
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Info Button Background Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.shopButton?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "backgroundColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Info Button Text Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.shopButton?.textColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "textColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Info Button Typography", "video-gallery"),
          className: "mt20",
          value: lightbox?.productInfo?.shopButton?.typography,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "typography"
              ),
            }),
          Component: Typography,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Info Button Padding", "video-gallery"),
          className: "mt20",
          values: lightbox?.productInfo?.shopButton?.padding?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "padding",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Info Button Border Radius", "video-gallery"),
          className: "mt20",
          values: lightbox?.productInfo?.shopButton?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "productInfo",
                "shopButton",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}

        <CardDivider />

        {renderComponentControl({
          label: __("Close Button Size", "video-gallery"),
          className: "mt20",
          value: lightbox?.closeButton?.size,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "size"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Background Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.closeButton?.backgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "backgroundColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Hover Background Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.closeButton?.hoverBackgroundColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "hoverBackgroundColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Icon Size", "video-gallery"),
          className: "mt20",
          value: lightbox?.closeButton?.iconSize,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "iconSize"
              ),
            }),
          Component: UnitControl,
          units: [pxUnit(), emUnit()],
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Icon Color", "video-gallery"),
          className: "mt20",
          value: lightbox?.closeButton?.iconColor,
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "iconColor"
              ),
            }),
          Component: ColorControl,
          ...premiumProps,
        })}

        {renderComponentControl({
          label: __("Close Button Border Radius", "video-gallery"),
          className: "mt20",
          values: lightbox?.closeButton?.borderRadius?.[device],
          onChange: (val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "lightbox",
                "closeButton",
                "borderRadius",
                device
              ),
            }),
          Component: BoxControl,
          isDeviceControl: true,
          ...premiumProps,
        })}
      </PanelBody>
    </>
  );
};

export default Style;
