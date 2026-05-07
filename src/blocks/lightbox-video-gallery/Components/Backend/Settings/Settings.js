import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
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
  device,
  setIsProModalOpen,
  isPremium,
  clientId,
  currentPostId,
  currentPostType,
}) => {
  const { alignment } = attributes;
  const premiumProps = { isPremium, setIsProModalOpen };

  const itemsProps = {
    attributes,
    setAttributes,
    activeIndex,
    setActiveIndex,
    device,
    premiumProps,
    clientId,
  };

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
                  {...itemsProps}
                  currentPostId={currentPostId}
                  currentPostType={currentPostType}
                />
              )}

              {"style" === tab.name && <Style {...itemsProps} />}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => {
            setAttributes({ alignment: val });
          }}
          describedBy={__("Block Name Alignment")}
          alignmentControls={[
            {
              title: __("Lightbox in left", "lightbox-video-gallery"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Lightbox in center", "lightbox-video-gallery"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Lightbox in right", "lightbox-video-gallery"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />
      </BlockControls>
    </>
  );
};
export default Settings;
