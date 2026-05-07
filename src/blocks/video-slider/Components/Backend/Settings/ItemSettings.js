import { __ } from "@wordpress/i18n";
import {
  TextControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
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

  setFreeFields(["video", "title", "Rating", "Poster"]);

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
        placeholder: __("Video url", "video-player"),
        ...premiumProps,
      })}

      {renderComponentControl({
        label: __("Poster", "video-player"),
        value: items[index]?.poster,
        labelPosition: "left",
        onChange: (val) => updateItem("poster", val),
        Component: TextControl,
        className: "mt20",
        placeholder: __("Poster", "video-player"),
        ...premiumProps,
      })}

      {renderComponentControl({
        label: __("Title", "video-player"),
        value: items[index]?.title,
        labelPosition: "left",
        onChange: (val) => updateItem("title", val),
        Component: TextControl,
        className: "mt20",
        placeholder: __("Title", "video-player"),
        ...premiumProps,
      })}

      {renderComponentControl({
        className: "mt20",
        label: __("Rating", "video-player"),
        value: items[index]?.rating,
        onChange: (val) => updateItem("rating", val),
        placeholder: __("Rating", "video-player"),
        labelPosition: "left",
        min: 0,
        max: 5,
        step: 1,
        Component: NumberControl,
        ...premiumProps,
      })}
    </>
  );
};

export default ItemSettings;
