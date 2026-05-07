import { InspectorControls } from "@wordpress/block-editor";
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
  setGroupIndex,
  isPremium,
  setIsProModalOpen,
  clientId,
  currentPostId,
  currentPostType,
}) => {
  const premiumProps = { isPremium, setIsProModalOpen };

  const itemsProps = {
    setGroupIndex,
    attributes,
    setAttributes,
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
          className="bPlTabPanel wp-block-b-blocks-test-purpose"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && <General {...itemsProps} />}

              {"style" === tab.name && <Style {...itemsProps} />}
            </>
          )}
        </TabPanel>
      </InspectorControls>
    </>
  );
};
export default Settings;
