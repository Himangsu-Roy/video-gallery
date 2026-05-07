import { __ } from "@wordpress/i18n";
import {
  __experimentalUnitControl,
  TextControl,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { produce } from "immer";
import {
  InlineMediaUpload,
  Label,
} from "../../../../../../../bpl-tools/Components";
import {
  renderComponentControl,
  setFreeFields,
} from "../../../../../Components/Common/utils/functions";
import { videoHeightOptions2 } from "../../../../../Components/Common/utils/options";

const ItemSettings = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  premiumProps,
  setActiveIndex = () => {},
  device,
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

  setFreeFields([
    "video",
    "title",
    "Subtitle",
    "Poster",
    "Video Height",
    "Height",
  ]);

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
        label: __("Title", "video-gallery"),
        value: items[index]?.title,
        labelPosition: "left",
        onChange: (val) => updateItem("title", val),
        Component: TextControl,
        className: "mt20",
        placeholder: __("Title", "video-gallery"),
        ...premiumProps,
      })}

      <Label className="mt20">{__("Video Height Type", "video-gallery")}</Label>
      <ToggleGroupControl
        __next40pxDefaultSize
        // __nextHasNoMarginBottom
        isBlock
        value={items[index]?.height}
        onChange={(value) => updateItem("height", value)}>
        {videoHeightOptions2.map((option) => (
          <ToggleGroupControlOption
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </ToggleGroupControl>

      {/* Video Height */}
      {items[index]?.height === "custom" &&
        renderComponentControl({
          label: __("Height", "video-gallery"),
          value: items[index]?.customHeight?.[device],
          labelPosition: "left",
          onChange: (val) => updateItem("customHeight", val, device),
          Component: __experimentalUnitControl,
          isDeviceControl: true,
          placeholder: __("Height", "video-gallery"),
          ...premiumProps,
        })}
    </>
  );
};

export default ItemSettings;
