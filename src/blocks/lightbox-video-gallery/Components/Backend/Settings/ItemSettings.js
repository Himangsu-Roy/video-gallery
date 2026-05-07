import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { TextControl } from "@wordpress/components";
import { produce } from "immer";
import { InlineMediaUpload } from "../../../../../../../bpl-tools/Components";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../Components/Common/utils/functions";
import {
  generateVideoThumbnail,
  isExternalVideoUrl,
} from "../../../../../Components/Common/utils/generateVideoThumbnail";

const ItemSettings = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  premiumProps,
  setActiveIndex = () => {},
}) => {
  const items = attributes[arrKey];

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

  useEffect(() => {
    const generateThumbnail = async () => {
      const url = items[index]?.video;
      if (url && !items[index]?.poster && !isExternalVideoUrl(url)) {
        try {
          const thumbnailDataUrl = await generateVideoThumbnail(url);
          updateItem("poster", thumbnailDataUrl);
        } catch (error) {
          console.warn("Failed to generate video thumbnail:", error);
        }
      }
    };

    generateThumbnail();
  }, [items[index]?.video]);

  setFreeFields(["video", "title", "Subtitle", "Poster"]);

  return (
    <>
      {renderComponentControl({
        label: __("Video", "video-gallery"),
        value: items[index]?.video,
        labelPosition: "left",
        onChange: async (media) => {
          const url = typeof media === "string" ? media : media?.url || "";
          updateItem("video", url);

        },
        Component: InlineMediaUpload,
        types: "video",
        placeholder: ["Video url", "video-player"],
        ...premiumProps,
      })}

      {renderComponentControl({
        label: __("Poster", "video-gallery"),
        value: items[index]?.poster,
        labelPosition: "left",
        onChange: (val) => updateItem("poster", val),
        Component: InlineMediaUpload,
        className: "mt20",
        placeholder: ["Poster", "video-player"],
        ...premiumProps,
      })}

      {renderComponentControl({
        label: __("Title", "video-gallery"),
        value: items[index]?.title,
        labelPosition: "left",
        onChange: (val) => updateItem("title", val),
        Component: TextControl,
        className: "mt20",
        placeholder: ["Title", "video-player"],
        ...premiumProps,
      })}

      {renderComponentControl({
        label: __("Subtitle", "video-gallery"),
        value: items[index]?.subtitle,
        labelPosition: "left",
        onChange: (val) => updateItem("subtitle", val),
        Component: TextControl,
        className: "mt20",
        placeholder: ["Subtitle", "video-player"],
        ...premiumProps,
      })}
    </>
  );
};

export default ItemSettings;
