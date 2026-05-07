import {
  InspectorControls
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../../../bpl-tools/utils/functions";
import { generalStyleTabs } from "../../../../../Components/Common/utils/options";
import General from "./General/General";
import Style from "./Style/Style";

const Settings = ({
  attributes,
  setAttributes,
  device,
  activeIndex,
  setActiveIndex,
  setIsProModalOpen,
  isPremium,
  clientId,
  currentPostId,
  currentPostType,
}) => {
  const premiumProps = { isPremium, setIsProModalOpen };

  const itemsProps = {
    activeIndex,
    setActiveIndex,
    device,
    premiumProps,
    clientId,
    currentPostId,
    currentPostType,
  };

  return (
    <>
      <InspectorControls>

        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  {...itemsProps}
                />
              )}

              {"style" === tab.name && (
                <Style
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                  {...itemsProps}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>
    </>
  );
};
export default Settings;
