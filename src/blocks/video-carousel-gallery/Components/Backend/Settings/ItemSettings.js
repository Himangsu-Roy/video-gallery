import {
  TextControl,
  ToggleControl,
  Button,
  Spinner,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "react";
// import apiFetch from "@wordpress/api-fetch";
import { produce } from "immer";
import { InlineMediaUpload } from "../../../../../../../bpl-tools/Components";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../Components/Common/utils/functions";
import ProductSelector from "../ProductSelector";
const apiFetch = window?.wp?.apiFetch;

const ItemSettings = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  premiumProps,
  setActiveIndex = () => {},
}) => {
  const items = attributes[arrKey];
  const [isCreating, setIsCreating] = useState(false);

  const updateItem = (property, val, childProperty = null) => {
    if (!items?.[index]) return;

    const newItems = produce(items, (draft) => {
      if (childProperty !== null) {
        if (!draft[index][property]) draft[index][property] = {};
        draft[index][property][childProperty] = val;
      } else {
        draft[index][property] = val;
      }
    });

    setAttributes({ [arrKey]: newItems });
    setActiveIndex(index);
  };

  const updateItemMultiple = (updates) => {
    if (!items?.[index]) return;

    const newItems = produce(items, (draft) => {
      Object.entries(updates).forEach(([property, val]) => {
        draft[index][property] = val;
      });
    });

    setAttributes({ [arrKey]: newItems });
    setActiveIndex(index);
  };

  const createProduct = async () => {
    if (isCreating) return;

    setIsCreating(true);
    try {
      const response = await apiFetch({
        path: "/vcg/v1/products",
        method: "POST",
        data: {
          title:
            items[index]?.title || __("New Product", "video-gallery"),
          price: items[index]?.price,
          image: items[index]?.product_image,
        },
      });

      if (response && response.id) {
        updateItemMultiple({
          product_id: response.id,
          woocommerce_enabled: true,
          title: response.title,
          price: response.price,
          product_image: response.image,
          product_url: response.permalink,
        });
      }
    } catch (err) {
      console.error("Failed to create product:", err);
      alert(
        __(
          "Failed to create product. Please try again.",
          "video-carousel-gallery",
        ),
      );
    } finally {
      setIsCreating(false);
    }
  };

  setFreeFields([
    "video",
    "title",
    "Subtitle",
    "Poster",
    "Video Height",
    "Height",
    "Description",
    "channel name",
    "category",
    "Current Price",
    "Original Price",
    "Product Image",
    "Use WooCommerce Product",
    "Select Product",
    "Product URL",
  ]);

  return (
    <>
      {renderComponentControl({
        label: __("Video", "video-gallery"),
        value: items[index]?.video,
        labelPosition: "left",
        onChange: (media) => {
          const url = typeof media === "string" ? media : media?.url || "";
          const attachmentId = typeof media === "object" ? media?.id : null;
          updateItem("video", url);
          if (attachmentId) updateItem("attachment_id", attachmentId);
        },
        Component: InlineMediaUpload,
        types: "video",
        placeholder: __("Video url", "video-gallery"),
        ...premiumProps,
      })}

      <ToggleControl
        className="mt10"
        labelPosition="top"
        label={__("Use WooCommerce Product", "video-gallery")}
        checked={items[index]?.woocommerce_enabled}
        onChange={(enabled) => {
          updateItem("woocommerce_enabled", enabled);
        }}
        help={__("Link this video with a WooCommerce product", "video-gallery")}
      />

      {/* {renderComponentControl({
        label: "Poster",
        labelPosition: "left",
        className: "mt20",
        value: items[index]?.poster,
        onChange: (media) => {
          const url = typeof media === "string" ? media : media?.url || "";
          const attachmentId = typeof media === "object" ? media?.id : null;
          updateItem("poster", url);
          if (attachmentId) updateItem("poster_attachment_id", attachmentId);
        },
        Component: InlineMediaUpload,
        types: "image",
        placeholder: ["Poster", "video-carousel-gallery"],
        ...premiumProps,
      })} */}

      {!items[index]?.woocommerce_enabled &&
        renderComponentControl({
          label: __("Product Image", "video-gallery"),
          labelPosition: "left",
          className: "mt20",
          value: items[index]?.product_image,
          onChange: (media) => {
            const url = typeof media === "string" ? media : media?.url || "";
            const attachmentId = typeof media === "object" ? media?.id : null;
            updateItem("product_image", url);
            if (attachmentId)
              updateItem("product_image_attachment_id", attachmentId);
          },
          Component: InlineMediaUpload,
          types: "image",
          placeholder: __("Product Image", "video-gallery"),
          ...premiumProps,
        })}

      {!items[index]?.woocommerce_enabled &&
        renderComponentControl({
          label: __("Title", "video-gallery"),
          value: items[index]?.title,
          labelPosition: "left",
          onChange: (val) => updateItem("title", val),
          Component: TextControl,
          className: "mt20",
          placeholder: __("Title", "video-gallery"),
          ...premiumProps,
        })}

      {!items[index]?.woocommerce_enabled &&
        renderComponentControl({
          label: __("Current Price", "video-gallery"),
          value: items[index]?.price,
          labelPosition: "left",
          onChange: (val) => updateItem("price", val),
          Component: TextControl,
          className: "mt20",
          placeholder: __("Current Price", "video-gallery"),
          ...premiumProps,
        })}

      {!items[index]?.woocommerce_enabled &&
        renderComponentControl({
          label: __("Original Price", "video-gallery"),
          value: items[index]?.original_price,
          labelPosition: "left",
          onChange: (val) => updateItem("original_price", val),
          Component: TextControl,
          className: "mt20",
          placeholder: __("Original Price", "video-gallery"),
          ...premiumProps,
        })}

      {!items[index]?.woocommerce_enabled &&
        renderComponentControl({
          label: __("Product URL", "video-gallery"),
          value: items[index]?.product_url,
          labelPosition: "left",
          onChange: (val) => updateItem("product_url", val),
          Component: TextControl,
          className: "mt20",
          placeholder: __("https://example.com/product", "video-gallery"),
          ...premiumProps,
        })}

      {!items[index]?.woocommerce_enabled && (
        <Button
          isSecondary
          isSmall
          onClick={createProduct}
          disabled={isCreating}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "16px",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {isCreating ? <Spinner /> : __("Create Product", "video-gallery")}
        </Button>
      )}

      <div style={{ marginTop: "10px" }}></div>

      {items[index]?.woocommerce_enabled && (
        <ProductSelector
          value={items[index]?.product_id}
          onChange={(product) => {
            if (product) {
              updateItemMultiple({
                product_id: product?.id,
                title: product?.title,
                price: product?.price,
                original_price: product?.sale_price
                  ? product?.regular_price
                  : null,
                product_image: product?.image,
                product_url: product?.permalink,
              });
            } else {
              updateItemMultiple({
                product_id: null,
                product_url: "",
              });
            }
          }}
        />
      )}
    </>
  );
};

export default ItemSettings;
