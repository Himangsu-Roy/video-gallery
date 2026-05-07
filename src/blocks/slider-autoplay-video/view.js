import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import SliderAutoplayVideo from "./Components/Common/SliderAutoplayVideo/SliderAutoplayVideo";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vgblk-slider-autoplay-video"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = Boolean(blockNameEl.dataset.pipecheck ?? false);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {isPremium ? (
          <SliderAutoplayVideo attributes={attributes} />
        ) : (
          <div className="wp-block-savg-slider-autoplay-video-pro">
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
