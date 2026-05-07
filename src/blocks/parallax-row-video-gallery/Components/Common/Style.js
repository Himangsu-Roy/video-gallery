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
  const { gallery, items } = attributes;
  const { orientation } = gallery;

  const mainSl = `#${id}`;
  const parallaxGallerySl = `${mainSl} .parallax-gallery`;
  const parallaxRowSl = `${parallaxGallerySl} .parallax-row`;
  const videoTrackSl = `${parallaxRowSl} .video-track`;
  const videoWrapperSl = `${videoTrackSl} .video-wrapper`;
  const videoPlayerSl = `${videoWrapperSl} .video-player`;
  const videoElementSl = `${videoPlayerSl} .video-element`;
  const videoGradientSl = `${videoPlayerSl} .video-gradient`;
  const overlaySl = `${videoPlayerSl} .overlay`;
  // const overlayCenterSl = `${overlaySl} .overlay-center`;
  const playButtonSl = `${overlaySl} .play-button`;
  const infoSl = `${videoPlayerSl} .info`;
  const titleSl = `${infoSl} .title`;
  const subtitleSl = `${infoSl} .subtitle`;
  const controlsSl = `${videoPlayerSl} .controls`;
  const controlButtonSl = `${controlsSl} .control-button`;
  const progressContainerSl = `${videoPlayerSl} .progress-container`;
  const progressBgSl = `${progressContainerSl} .progress-bg`;
  const progressBarSl = `${progressContainerSl} .progress-bar`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        ${getTypoCSS("", items?.info?.title?.typography)?.googleFontLink}
        ${getTypoCSS("", items?.info?.subtitle?.typography)?.googleFontLink}

		    ${getTypoCSS(titleSl, items?.info?.title?.typography)?.styles}
		    ${getTypoCSS(subtitleSl, items?.info?.subtitle?.typography)?.styles}

        ${progressContainerSl}{
          height: ${items?.controls?.progress?.height};
        }

        ${progressBgSl}{
          background-color: ${items?.controls?.progress?.bgColor};
        }

        ${progressBarSl}{
          background: ${items?.controls?.progress?.barColor};
        }

        ${controlsSl}{
          gap: ${items?.controls?.gap?.desktop};
          top: ${items?.controls?.position?.vertical?.desktop};
          right: ${items?.controls?.position?.horizontal?.desktop};
          flex-direction: ${items?.controls?.direction};
        }

        ${controlButtonSl}{
          background-color: ${items?.controls?.bgColor};
          backdrop-filter: blur(${items?.controls?.blur});
          width: ${items?.controls?.size?.desktop};
          height: ${items?.controls?.size?.desktop};
          border-radius: ${getBoxCSS(items?.controls?.borderRadius)};
        }

        ${controlButtonSl}:hover{
          background-color: ${items?.controls?.bgHoverColor};
        }

        ${controlButtonSl} svg{
          stroke: ${items?.controls?.iconStrokeColor};
          fill: ${items?.controls?.iconFillColor};
          width: ${items?.controls?.iconSize?.desktop};
          height: ${items?.controls?.iconSize?.desktop};
        }

        ${playButtonSl}{
          backdrop-filter: blur(${items?.playBtn?.blur});
          background-color: ${items?.playBtn?.bgColor};
          border-radius: ${getBoxCSS(items?.playBtn?.borderRadius)};
          width: ${items?.playBtn?.size?.desktop};
          height: ${items?.playBtn?.size?.desktop};
        }

        ${playButtonSl} svg{
          stroke: ${items?.playBtn?.iconStrokeColor};
          fill: ${items?.playBtn?.iconFillColor};
          width: ${items?.playBtn?.iconSize?.desktop};
          height: ${items?.playBtn?.iconSize?.desktop};
        }

        ${playButtonSl}:hover{
          background-color: ${items?.playBtn?.bgHoverColor};
          transform: scale(${items?.playBtn?.scaleEffect});
        }
        
        ${videoElementSl}{
          object-fit: ${items?.video?.objectFit};
        }

        ${videoPlayerSl}{
          border-radius: ${getBoxCSS(items?.borderRadius?.desktop)};
          box-shadow: ${getMultiShadowCSS(items?.shadow, "box")};
          min-width: ${items?.video?.minWidth?.desktop};
          max-width: ${items?.video?.maxWidth?.desktop};
          height: ${items?.video?.height?.desktop};
        }

        ${videoPlayerSl}:hover{
          transform: scale(${items?.hoverScaleEffect});  
        }

        ${titleSl}{
          color: ${items?.info?.title?.color};
          margin: ${getBoxCSS(items?.info?.title?.margin?.desktop)};
          text-shadow: ${getMultiShadowCSS(items?.info?.textShadow, "text")};
        }

        ${subtitleSl}{
          color: ${items?.info?.subtitle?.color};
          margin: ${getBoxCSS(items?.info?.subtitle?.margin?.desktop)};
          text-shadow: ${getMultiShadowCSS(items?.info?.textShadow, "text")};
        }

        ${infoSl}{
          padding: ${getBoxCSS(items?.info?.padding?.desktop)};
        }		

        ${parallaxGallerySl}{
          ${getBackgroundCSS(gallery?.background)}
          ${getBorderCSS(gallery?.border)}
          border-radius: ${getBoxCSS(gallery?.borderRadius?.desktop)};
          box-shadow: ${getMultiShadowCSS(gallery?.shadow, "box")};
          padding: ${getBoxCSS(gallery?.padding?.desktop)};
          row-gap: ${gallery?.rowGap?.desktop}px;
          justify-content: center;
        }

        ${videoTrackSl}{
          gap: ${gallery?.columnGap?.desktop}px;
          flex-direction: ${orientation === "vertical" ? "column" : "row"};
        }

        ${parallaxRowSl}{
          padding: ${getBoxCSS(items?.padding?.desktop)};
        }

        ${videoGradientSl}{
          background: linear-gradient(to top, ${
            items?.bottomOverlayColor
          }, transparent, transparent);
        }

        ${overlaySl}{
          background-color: ${items?.overlayColor};
        }


        ${tabBreakpoint}{

          ${parallaxRowSl}{
            padding: ${getBoxCSS(items?.padding?.tablet)};
          }

          ${videoTrackSl}{
            gap: ${gallery?.columnGap?.tablet}px;
            grid-template-columns: repeat(${gallery?.columns?.tablet}, 1fr);
          }

          ${parallaxGallerySl}{
            border-radius: ${getBoxCSS(gallery?.borderRadius?.tablet)};
            padding: ${getBoxCSS(gallery?.padding?.tablet)};
            row-gap: ${gallery?.rowGap?.tablet}px;
          }

          ${infoSl}{
            padding: ${getBoxCSS(items?.info?.padding?.tablet)};
          }

          ${titleSl}{
            margin: ${getBoxCSS(items?.info?.title?.margin?.tablet)};
          }

          ${subtitleSl}{
            margin: ${getBoxCSS(items?.info?.subtitle?.margin?.tablet)};
          }

          ${videoPlayerSl}{
            border-radius: ${getBoxCSS(items?.borderRadius?.tablet)};
            min-width: ${items?.video?.minWidth?.tablet};
            max-width: ${items?.video?.maxWidth?.tablet};
            height: ${items?.video?.height?.tablet};
          }

          ${controlsSl}{
            gap: ${items?.controls?.gap?.tablet};
            top: ${items?.controls?.position?.vertical?.tablet};
            right: ${items?.controls?.position?.horizontal?.tablet};
          }

          ${controlButtonSl}{
            width: ${items?.controls?.size?.tablet};
            height: ${items?.controls?.size?.tablet};
          }

          ${controlButtonSl} svg{
            width: ${items?.controls?.iconSize?.tablet};
            height: ${items?.controls?.iconSize?.tablet};
          }

          ${playButtonSl}{
            width: ${items?.playBtn?.size?.tablet};
            height: ${items?.playBtn?.size?.tablet};
          }

          ${playButtonSl} svg{
            width: ${items?.playBtn?.iconSize?.tablet};
            height: ${items?.playBtn?.iconSize?.tablet};
          }
         
        }


        ${mobileBreakpoint}{
          ${parallaxRowSl}{
            padding: ${getBoxCSS(items?.padding?.mobile)};
          }

          ${videoTrackSl}{
            gap: ${gallery?.columnGap?.mobile}px;
            grid-template-columns: repeat(${gallery?.columns?.mobile}, 1fr);
          }

          ${parallaxGallerySl}{
            border-radius: ${getBoxCSS(gallery?.borderRadius?.mobile)};
            padding: ${getBoxCSS(gallery?.padding?.mobile)};
            row-gap: ${gallery?.rowGap?.mobile}px;
          }

          ${infoSl}{
            padding: ${getBoxCSS(items?.info?.padding?.mobile)};
          }

          ${titleSl}{
            margin: ${getBoxCSS(items?.info?.title?.margin?.mobile)};
          }

          ${subtitleSl}{
            margin: ${getBoxCSS(items?.info?.subtitle?.margin?.mobile)};
          }

          ${videoPlayerSl}{
            border-radius: ${getBoxCSS(items?.borderRadius?.mobile)};
            min-width: ${items?.video?.minWidth?.mobile};
            max-width: ${items?.video?.maxWidth?.mobile};
            height: ${items?.video?.height?.mobile};
          }

          ${controlsSl}{
            gap: ${items?.controls?.gap?.mobile};
            top: ${items?.controls?.position?.vertical?.mobile};
            right: ${items?.controls?.position?.horizontal?.mobile};
          }

          ${controlButtonSl}{
            width: ${items?.controls?.size?.mobile};
            height: ${items?.controls?.size?.mobile};
          }

          ${controlButtonSl} svg{
            width: ${items?.controls?.iconSize?.mobile};
            height: ${items?.controls?.iconSize?.mobile};
          }

          ${playButtonSl}{
            width: ${items?.playBtn?.size?.mobile};
            height: ${items?.playBtn?.size?.mobile};
          }

          ${playButtonSl} svg{
            width: ${items?.playBtn?.iconSize?.mobile};
            height: ${items?.playBtn?.iconSize?.mobile};
          }

        }

		

	`,
      }}
    />
  );
};
export default Style;
