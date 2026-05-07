import MasonryGrid1 from "./Grid/MasonryGrid1";
function MasonryVideoGrid({ attributes, activeIndex, setActiveIndex }) {

  return (
    <div className="mvg-wrapper">
      <div className="mvg-wrapper-content">
        <MasonryGrid1 attributes={attributes} activeIndex={activeIndex}
          setActiveIndex={setActiveIndex} />
      </div>
    </div>
  );
}

export default MasonryVideoGrid;
