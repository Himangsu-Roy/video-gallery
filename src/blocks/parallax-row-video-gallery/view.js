import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import ParallaxVideoGallery from "./Components/Common/ParallaxRowVideoGallery/ParallaxVideoGallery";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vgblk-parallax-row-video-gallery"
  );

  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = Boolean(blockNameEl.dataset.pipecheck ?? false);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {isPremium ? (
          <ParallaxVideoGallery attributes={attributes} />
        ) : (
          <div className="wp-block-prvg-parallax-row-video-gallery-pro">
            <p style={{ color: "#ffffff" }}>
              This block is only available in the Pro version
            </p>
          </div>
        )}
      </>,
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
