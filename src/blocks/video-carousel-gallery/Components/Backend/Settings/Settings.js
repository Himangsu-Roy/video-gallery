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
  activeIndex,
  setActiveIndex,
  isPremium,
  setIsProModalOpen,
  device,
  clientId,
  currentPostId,
  currentPostType,
}) => {
  const premiumProps = { isPremium, setIsProModalOpen };

  return (
    <>
      <InspectorControls>

        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}>
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  premiumProps={premiumProps}
                  device={device}
                  clientId={clientId}
                  currentPostId={currentPostId}
                  currentPostType={currentPostType}
                />
              )}

              {"style" === tab.name && (
                <Style
                  attributes={attributes}
                  setAttributes={setAttributes}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  premiumProps={premiumProps}
                  device={device}
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
