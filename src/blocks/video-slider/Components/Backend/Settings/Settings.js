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
  setIsProModalOpen,
  // isProModalOpen,
  isPremium,
  clientId,
  currentPostId,
  currentPostType,
}) => {
  const premiumProps = { isPremium, setIsProModalOpen };
  const itemsProps = {
    attributes,
    setAttributes,
    arrKey: "videos",
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
          onSelect={tabController}>
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
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

      {/* <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Block Name Alignment")}
          alignmentControls={[
            {
              title: __("Block Name in left", "textdomain"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Block Name in center", "textdomain"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Block Name in right", "textdomain"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />
      </BlockControls> */}
    </>
  );
};
export default Settings;
