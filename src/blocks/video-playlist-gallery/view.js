import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import VideoPlaylistGallery from "./Components/Common/VideoPlaylistGallery/VideoPlaylistGallery";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vgblk-video-playlist-gallery",
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = Boolean(blockNameEl.dataset.pipecheck ?? false);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {isPremium ? (
          <VideoPlaylistGallery
            attributes={attributes}
            blockId={blockNameEl.id}
          />
        ) : (
          <div className="wp-block-vpg-video-playlist-gallery-pro">
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
