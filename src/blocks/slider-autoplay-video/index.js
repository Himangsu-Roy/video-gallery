import { registerBlockType } from "@wordpress/blocks";
import "./editor.scss";
import metadata from "./block.json";
import Edit from "./Components/Backend/Edit";
import { sliderAutoplayIcon } from "../../Components/Common/utils/icons";
import { isBlockEnabled } from "../../Components/Common/utils/functions";

if (isBlockEnabled(metadata.name)) {
  registerBlockType(metadata, {
    icon: sliderAutoplayIcon,
    edit: Edit,
  });
}
