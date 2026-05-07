import { registerBlockType } from "@wordpress/blocks";
import "./editor.scss";
import metadata from "./block.json";
import Edit from "./Components/Backend/Edit";
import { videoPlaylistIcon } from "../../Components/Common/utils/icons";
import { isBlockEnabled } from "../../Components/Common/utils/functions";

if (isBlockEnabled(metadata.name)) {
  registerBlockType(metadata, {
    icon: videoPlaylistIcon,
    edit: Edit,
  });
}
