import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import VideoTestimonialSection from "./Components/Common/VideoTestimonialSection/VideoTestimonialSection";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vgblk-video-testimonial-section",
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = Boolean(blockNameEl.dataset.pipecheck ?? false);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {isPremium ? (
          <VideoTestimonialSection attributes={attributes} />
        ) : (
          <div className="wp-block-vts-video-testimonial-section-pro">
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
