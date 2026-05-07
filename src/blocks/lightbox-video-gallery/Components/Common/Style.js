import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../../bpl-tools/utils/data";
import {
  getBackgroundCSS,
  getBorderCSS,
  getBoxCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { gallery, items, align, alignment } = attributes;
  const mainSl = `#${id}`;
  const lightboxPageSl = `${mainSl} .lightbox-page`;
  const lightboxContainerSl = `${mainSl} .gallery-container`;
  const lightboxVideoSl = `${lightboxContainerSl} .video`;
  const lightboxVideoPosterSl = `${lightboxVideoSl} .poster`;

  const lgContainerSl = `.lg-container`;
  // const lgBackdropSl = `${lgContainerSl} .lg-backdrop`;
  const lgComponentsOpenSl = `${lgContainerSl} .lg-components-open`;
  const lgContentSl = `${lgComponentsOpenSl} .lg-content`;
  const lgInnerSl = `${lgContentSl} .lg-inner`;
  const lgVideoContentSl = `${lgInnerSl} .lg-video-cont`;
  const lgVideoObjectSl = `${lgVideoContentSl} .lg-video-object`;
  const lgVideoPosterSl = `${lgVideoContentSl} .lg-video-poster`;

  // const lgPrevSl = `${lgInnerSl} .lg-prev`;
  // const lgNextSl = `${lgInnerSl} .lg-next`;
  // const lgToolbarSl = `${lgContentSl} .lg-toolbar`;

  const lightboxModalContentSl = `${lgContainerSl} .lg-components-open`;
  const lightboxModalInfoSl = `${lightboxModalContentSl} .lg-components`;
  const lightboxModalTitleSl = `${lightboxModalInfoSl} .lg-sub-html h4`;
  const lightboxModalSubtitleSl = `${lightboxModalInfoSl} .lg-sub-html p`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        ${getTypoCSS("", items?.info?.title?.typography)?.googleFontLink}
        ${getTypoCSS("", items?.info?.subtitle?.typography)?.googleFontLink}

		    ${getTypoCSS(lightboxModalTitleSl, items?.info?.title?.typography)?.styles}
		    ${
          getTypoCSS(lightboxModalSubtitleSl, items?.info?.subtitle?.typography)
            ?.styles
        }

        ${lightboxContainerSl}{
          display: ${align ? "grid" : "flex"}
        }

        ${lightboxContainerSl}{
          grid-template-columns: repeat(${gallery?.columns?.desktop}, 1fr);
          row-gap: ${gallery?.rowGap?.desktop}px;
          column-gap: ${gallery?.columnGap?.desktop}px;
        }

        ${lightboxVideoPosterSl}{
          object-fit: ${items?.video?.objectFit};
        }

        ${lightboxVideoSl}, ${lgVideoObjectSl}, ${lgVideoPosterSl}, ${lightboxVideoPosterSl}{
          border-radius: ${getBoxCSS(items?.borderRadius?.desktop)}; 
          ${getBorderCSS(items?.border)}
          box-shadow: ${getMultiShadowCSS(items?.shadow)};
        }

        ${lightboxVideoSl}{
          padding: ${getBoxCSS(items?.padding?.desktop)};
          margin: ${getBoxCSS(items?.margin?.desktop)};
          width: ${items?.video?.width?.desktop};
          height: ${items?.video?.height?.desktop};
          ${getBackgroundCSS(items?.background)}
        }

        ${lightboxVideoSl}:hover, ${lgVideoObjectSl}:hover, ${lgVideoPosterSl}:hover{
          box-shadow: ${getMultiShadowCSS(items?.hoverShadow)};
        }

        ${lightboxModalInfoSl} .lg-sub-html{
          padding: ${getBoxCSS(items?.info?.padding?.desktop)};
        }
		
        ${lightboxPageSl}{
          ${getBackgroundCSS(gallery?.background)}
          ${getBorderCSS(gallery?.border)}
          border-radius: ${getBoxCSS(gallery?.borderRadius?.desktop)};
          box-shadow: ${getMultiShadowCSS(gallery?.shadow)};
          padding: ${getBoxCSS(gallery?.padding?.desktop)};
          margin: ${getBoxCSS(gallery?.margin?.desktop)};
          justify-content: ${alignment};
        }

        ${lightboxModalTitleSl}{
          color: ${items?.info?.title?.color};
          margin: ${getBoxCSS(items?.info?.title?.margin?.desktop)};
        }

        ${lightboxModalSubtitleSl}{
          color: ${items?.info?.subtitle?.color};
          margin: ${getBoxCSS(items?.info?.subtitle?.margin?.desktop)};
        }


        ${tabBreakpoint}{
          ${lightboxContainerSl}{
            grid-template-columns: repeat(${gallery?.columns?.tablet}, 1fr);
            row-gap: ${gallery?.rowGap?.tablet}px;
            column-gap: ${gallery?.columnGap?.tablet}px;
          }

          ${lightboxModalTitleSl}{
            margin: ${getBoxCSS(items?.info?.title?.margin?.tablet)};
          }

          ${lightboxModalSubtitleSl}{
            margin: ${getBoxCSS(items?.info?.subtitle?.margin?.tablet)};
          }

          ${lightboxModalInfoSl} .lg-sub-html{
            padding: ${getBoxCSS(items?.info?.padding?.tablet)};
          }
		
          ${lightboxPageSl}{
            border-radius: ${getBoxCSS(gallery?.borderRadius?.tablet)};
            padding: ${getBoxCSS(gallery?.padding?.tablet)};
            margin: ${getBoxCSS(gallery?.margin?.tablet)};
          }

          ${lightboxVideoSl}, ${lgVideoObjectSl}, ${lgVideoPosterSl}{
            border-radius: ${getBoxCSS(items?.borderRadius?.tablet)};
          }

          ${lightboxVideoSl}{
            padding: ${getBoxCSS(items?.padding?.tablet)};
            margin: ${getBoxCSS(items?.margin?.tablet)};
            width: ${items?.video?.width?.tablet};
            height: ${items?.video?.height?.tablet};
          }




        }


        ${mobileBreakpoint}{
          ${lightboxContainerSl}{
            grid-template-columns: repeat(${gallery?.columns?.mobile}, 1fr);
            row-gap: ${gallery?.rowGap?.mobile}px;
            column-gap: ${gallery?.columnGap?.mobile}px;
          }

          ${lightboxModalTitleSl}{
            margin: ${getBoxCSS(items?.info?.title?.margin?.mobile)};
          }

          ${lightboxModalSubtitleSl}{
            margin: ${getBoxCSS(items?.info?.subtitle?.margin?.mobile)};
          }

          ${lightboxModalInfoSl} .lg-sub-html{
            padding: ${getBoxCSS(items?.info?.padding?.mobile)};
          }
		
          ${lightboxPageSl}{
            border-radius: ${getBoxCSS(gallery?.borderRadius?.mobile)};
            padding: ${getBoxCSS(gallery?.padding?.mobile)};
            margin: ${getBoxCSS(gallery?.margin?.mobile)};
          }

          ${lightboxVideoSl}, ${lgVideoObjectSl}, ${lgVideoPosterSl}{
            border-radius: ${getBoxCSS(items?.borderRadius?.mobile)};
          }

          ${lightboxVideoSl}{
            padding: ${getBoxCSS(items?.padding?.mobile)};
            margin: ${getBoxCSS(items?.margin?.mobile)};
            width: ${items?.video?.width?.mobile};
            height: ${items?.video?.height?.mobile};
          }




        }
		

	`,
      }}
    />
  );
};
export default Style;
