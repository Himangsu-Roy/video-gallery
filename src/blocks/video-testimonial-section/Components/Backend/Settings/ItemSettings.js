import { __ } from "@wordpress/i18n";
import { TextControl } from "@wordpress/components";
import { produce } from "immer";
import { InlineMediaUpload } from "../../../../../../../bpl-tools/Components";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../Components/Common/utils/functions";

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
    const items = attributes[arrKey];
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
    if (setActiveIndex) setActiveIndex(index);
  };

  setFreeFields(["subtitle", "video", "title", "poster"]);

  return (
    <>
      {renderComponentControl({
        label: __("Video", "video-gallery"),
        value: items[index]?.video,
        labelPosition: "left",
        onChange: (media) => {
          const url = typeof media === "string" ? media : media?.url || "";
          updateItem("video", url);
        },
        Component: InlineMediaUpload,
        types: "video",
        placeholder: __("Video url", "video-gallery"),
        ...premiumProps,
      })}

      {renderComponentControl({
        label: __("Poster", "video-gallery"),
        value: items[index]?.poster,
        labelPosition: "left",
        className: "mt20",
        onChange: (media) => {
          const url = typeof media === "string" ? media : media?.url || "";
          updateItem("poster", url);
        },
        Component: InlineMediaUpload,
        types: "image",
        placeholder: __("Poster url", "video-gallery"),
        ...premiumProps,
      })}

      {renderComponentControl({
        label: __("Title", "video-gallery"),
        value: items[index]?.title,
        labelPosition: "left",
        onChange: (val) => updateItem("title", val),
        Component: TextControl,
        className: "mt20",
        placeholder: __("Title", "video-gallery"),
        ...premiumProps,
      })}

      {renderComponentControl({
        label: __("Subtitle", "video-gallery"),
        value: items[index]?.subtitle,
        labelPosition: "left",
        onChange: (val) => updateItem("subtitle", val),
        Component: TextControl,
        className: "mt20",
        placeholder: __("Subtitle", "video-gallery"),
        ...premiumProps,
      })}
    </>
  );
};

export default ItemSettings;
