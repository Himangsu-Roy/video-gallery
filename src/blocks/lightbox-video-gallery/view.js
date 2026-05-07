import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import LightboxGallery from "./Components/Common/LightboxGallery/LightboxGallery";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vgblk-lightbox-video-gallery",
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = Boolean(blockNameEl.dataset.pipecheck ?? false);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {isPremium ? (
          <LightboxGallery attributes={attributes} />
        ) : (
          <div>
            <div className="wp-block-lvg-lightbox-video-gallery-pro">
              <p style={{ color: "#ffffff" }}>
                This block is only available in the Pro version
              </p>
            </div>
          </div>
        )}
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
