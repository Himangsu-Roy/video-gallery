import ItemSettings from "./ItemSettings";
import { ItemsPanel } from "../../../../../../../bpl-tools/Components";

const LayerItemPanel = ({
  attributes,
  setAttributes,
  itemsProps,
  premiumProps,
  clientId,
  activeIndex,
  setActiveIndex,
  groupIndex,
}) => {
  const videos = attributes.videos[groupIndex] || [];
  const nextIndex = videos.length + 1;

  return (
    <>
      <ItemsPanel
        {...itemsProps}
        attributes={{
          ...attributes,
          videos,
        }}
        setAttributes={(updated) => {
          const newVideos = [...attributes.videos];
          newVideos[groupIndex] = updated.videos;
          setAttributes({ videos: newVideos });
        }}
        clientId={clientId}
        arrKey="videos"
        newItem={{
          id: Math.random().toString(36).slice(2, 11),
          title: `Title ${nextIndex}`,
          subtitle: `Subtitle ${nextIndex}`,
          video:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          poster:
            "https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/poster.jpg",
        }}
        ItemSettings={ItemSettings}
        itemLabel="Video"
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        premiumProps={premiumProps}
        groupIndex={groupIndex}
        design="sortable"
      />
    </>
  );
};

export default LayerItemPanel;
