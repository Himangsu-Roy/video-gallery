import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import VideoSlider from "./Components/Common/VideoSlider/VideoSlider";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vgblk-video-slider",
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = Boolean(blockNameEl.dataset.pipecheck ?? false);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {isPremium ? (
          <VideoSlider attributes={attributes} />
        ) : (
          <div className="wp-block-vsl-video-slider-pro">
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
