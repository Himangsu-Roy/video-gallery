import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import MasonryVideoGrid from "./Components/Common/MasonryVideoGrid/MasonryVideoGrid";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vgblk-masonry-video-grid-one",
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = Boolean(blockNameEl.dataset.pipecheck ?? false);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {isPremium ? (
          <MasonryVideoGrid attributes={attributes} />
        ) : (
          <div className="wp-block-mvg-masonry-video-grid-pro">
            <p style={{ color: "#ffffff", margin: "0" }}>
              This block is only available in the Pro version
            </p>
          </div>
        )}
      </>,
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
