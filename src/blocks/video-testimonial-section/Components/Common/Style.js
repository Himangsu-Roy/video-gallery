import {
  getBackgroundCSS,
  getBorderCSS,
  getBoxCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../../bpl-tools/utils/data";

const Style = ({ attributes, id }) => {
  const { gallery, items } = attributes;

  const mainSl = `#${id}`;
  const vpPageSl = `${mainSl} .vp-page`;
  const vpContainerSl = `${vpPageSl} .vp-container`;
  const vpGridSl = `${vpContainerSl} .vp-grid`;
  const vpCardSl = `${vpGridSl} .vp-card`;
  const vpVideoWrapperSl = `${vpCardSl} .vp-video-wrapper`;
  const vpVideoSl = `${vpVideoWrapperSl} .vp-video`;
  const vpControlsOverlaySl = `${vpVideoWrapperSl} .vp-controls-overlay`;
  const vpControlsSl = `${vpControlsOverlaySl} .vp-controls`;
  const vpSkipSl = `${vpControlsSl} .vp-skip`;
  const vpPlayButtonSl = `${vpControlsSl} .vp-play-button`;
  const vpTimeSl = `${vpControlsSl} .vp-time`;
  const vpProgressSl = `${vpControlsOverlaySl} .vp-progress`;
  const vpInfoSl = `${vpCardSl} .vp-info`;
  const vpTitleSl = `${vpInfoSl} .vp-title`;
  const vpSubtitleSl = `${vpInfoSl} .vp-subtitle`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		
		${getTypoCSS("", items?.title?.typography)?.googleFontLink}
		${getTypoCSS("", items?.subtitle?.typography)?.googleFontLink}
		${getTypoCSS("", items?.controls?.typography)?.googleFontLink}
		

		${getTypoCSS(vpTitleSl, items?.title?.typography)?.styles}
		${getTypoCSS(vpSubtitleSl, items?.subtitle?.typography)?.styles}
		${getTypoCSS(vpTimeSl, items?.controls?.typography)?.styles}

 
		${vpPageSl}{
		  ${getBackgroundCSS(gallery?.background)}
		  ${getBorderCSS(gallery?.border)}
		  border-radius: ${getBoxCSS(gallery?.borderRadius?.desktop)};
		  box-shadow: ${getMultiShadowCSS(gallery?.shadow)};
		  margin: ${getBoxCSS(gallery?.margin?.desktop)};
		}
	

		${vpPlayButtonSl}{
			border-radius: ${getBoxCSS(
        items?.controls?.playPauseBtn?.borderRadius?.desktop
      )};
			width: ${items?.controls?.playPauseBtn?.size?.desktop};
			height: ${items?.controls?.playPauseBtn?.size?.desktop};
			background: ${items?.controls?.playPauseBtn?.color};
			${getBorderCSS(items?.controls?.playPauseBtn?.border)}
		}
 
		${vpPlayButtonSl}:hover{
		  background: ${items?.controls?.playPauseBtn?.hoverColor};
		}


		${vpProgressSl}{
		  background: ${items?.controls?.progressBar?.color};
		  height: ${items?.controls?.progressBar?.height};
		}

		${vpProgressSl}::-webkit-slider-thumb {
		  width: ${items?.controls?.progressBar?.sliderThumb?.size};
		  height: ${items?.controls?.progressBar?.sliderThumb?.size};
		  background: ${items?.controls?.progressBar?.sliderThumb?.color};
		  ${getBorderCSS(items?.controls?.progressBar?.sliderThumb?.border)}
	      border-radius: ${getBoxCSS(
          items?.controls?.progressBar?.sliderThumb?.borderRadius
        )};
		}
		

		${vpProgressSl}::-moz-range-thumb {
		  width: ${items?.controls?.progressBar?.sliderThumb?.size};
		  height: ${items?.controls?.progressBar?.sliderThumb?.size};
		  background: ${items?.controls?.progressBar?.sliderThumb?.color};
		  ${getBorderCSS(items?.controls?.progressBar?.sliderThumb?.border)}
	      border-radius: ${getBoxCSS(
          items?.controls?.progressBar?.sliderThumb?.borderRadius
        )};
		}

		${vpProgressSl}::-ms-thumb {
		  width: ${items?.controls?.progressBar?.sliderThumb?.size};
		  height: ${items?.controls?.progressBar?.sliderThumb?.size};
		  background: ${items?.controls?.progressBar?.sliderThumb?.color};
		  ${getBorderCSS(items?.controls?.progressBar?.sliderThumb?.border)}
	      border-radius: ${getBoxCSS(
          items?.controls?.progressBar?.sliderThumb?.borderRadius
        )};
		}


		

		${vpSkipSl} svg, ${vpPlayButtonSl} svg{
		 stroke-width: ${items?.controls?.strokeWidth.desktop};
		 width: ${items?.controls?.iconSize.desktop};
		 height: ${items?.controls?.iconSize.desktop};
		}

		${vpSkipSl}:hover svg {
		  stroke: ${items?.controls?.skipHoverColor};
		}

		${vpControlsSl}{
		  gap: ${items?.controls?.gap?.desktop};
		  color: ${items?.controls?.color};
		}

		${vpControlsSl} svg {
		  stroke: ${items?.controls?.color};
		}

		${vpControlsOverlaySl}{
		  padding: ${getBoxCSS(items?.controls?.padding?.desktop)};
		  background: linear-gradient(to top, ${
        items?.controls?.overlayColor
      }, transparent);
		}

		${vpCardSl}{
		  border-radius: ${getBoxCSS(items?.borderRadius?.desktop)};
		  background: ${items?.background?.color};
		  box-shadow: ${getMultiShadowCSS(items?.shadow)};
		}

		${vpInfoSl}{
		  padding: ${getBoxCSS(items?.info?.padding?.desktop)};																												
		}

		${vpTitleSl}{
		  color: ${items?.title?.color};
		  margin: ${getBoxCSS(items?.title?.margin?.desktop)};
		}

		${vpContainerSl}{
			max-width: ${gallery?.container?.maxWidth}px;
			padding: ${getBoxCSS(gallery?.padding?.desktop)};
		}

		${vpSubtitleSl}{
		  color: ${items?.subtitle?.color};
		  margin: ${getBoxCSS(items?.subtitle?.margin?.desktop)};
		}

		

		${vpVideoSl} {
			object-fit: ${items?.video?.objectFit || "cover"};
			height: ${items?.video?.height?.desktop}px;
		}

		${vpGridSl} {
			grid-column-gap: ${gallery?.columnGap?.desktop}px;
			grid-row-gap: ${gallery?.rowGap?.desktop}px;
			grid-template-columns: repeat(${gallery?.columns?.desktop}, 1fr);
		}
		

		${tabBreakpoint} {
			${vpGridSl} {
				grid-column-gap: ${gallery?.columnGap?.tablet}px;
				grid-row-gap: ${gallery?.rowGap?.tablet}px;
				grid-template-columns: repeat(${gallery?.columns?.tablet}, 1fr);
			}

			${vpVideoSl} {
			  height: ${items?.video?.height?.tablet}px;
			}

			${vpPlayButtonSl}{
			border-radius: ${getBoxCSS(
        items?.controls?.playPauseBtn?.borderRadius?.tablet
      )};
			width: ${items?.controls?.playPauseBtn?.size?.tablet};
			height: ${items?.controls?.playPauseBtn?.size?.tablet};
			}


			${vpSkipSl} svg, ${vpPlayButtonSl} svg{
		 stroke-width: ${items?.controls?.strokeWidth.tablet};
		 width: ${items?.controls?.iconSize.tablet};
		 height: ${items?.controls?.iconSize.tablet};
		}


	  	${vpControlsSl}{
		  gap: ${items?.controls?.gap?.tablet};
		}


	  	${vpControlsOverlaySl}{
		  padding: ${getBoxCSS(items?.controls?.padding?.tablet)};
		}

		${vpCardSl}{
		  border-radius: ${getBoxCSS(items?.borderRadius?.tablet)};
		}


		${vpInfoSl}{
		  padding: ${getBoxCSS(items?.info?.padding?.tablet)};																												
		}

		${vpTitleSl}{
		  margin: ${getBoxCSS(items?.title?.margin?.tablet)};
		}

		${vpContainerSl}{
			padding: ${getBoxCSS(gallery?.padding?.tablet)};
		}

		${vpSubtitleSl}{
		  margin: ${getBoxCSS(items?.subtitle?.margin?.tablet)};
		}

		${vpPageSl}{
		  margin: ${getBoxCSS(gallery?.margin?.tablet)};
		  border-radius: ${getBoxCSS(gallery?.borderRadius?.tablet)};
		}
	}

		${mobileBreakpoint} {
			${vpVideoSl} {
			  height: ${items?.video?.height?.mobile}px;
			}
			${vpGridSl} {
				grid-column-gap: ${gallery?.columnGap?.mobile}px;
				grid-row-gap: ${gallery?.rowGap?.mobile}px;
				grid-template-columns: repeat(${gallery?.columns?.mobile}, 1fr);
			}

			${vpPlayButtonSl}{
				border-radius: ${getBoxCSS(
          items?.controls?.playPauseBtn?.borderRadius?.mobile
        )};
				width: ${items?.controls?.playPauseBtn?.size?.mobile};
				height: ${items?.controls?.playPauseBtn?.size?.mobile};
			}

			${vpSkipSl} svg, ${vpPlayButtonSl} svg{
				stroke-width: ${items?.controls?.strokeWidth.mobile};
				width: ${items?.controls?.iconSize.mobile};
				height: ${items?.controls?.iconSize.mobile};
			}

			${vpControlsSl}{
			gap: ${items?.controls?.gap?.mobile};
			}

			${vpControlsOverlaySl}{
			padding: ${getBoxCSS(items?.controls?.padding?.mobile)};
			}

			${vpCardSl}{
			border-radius: ${getBoxCSS(items?.borderRadius?.mobile)};
			}

			${vpInfoSl}{
			padding: ${getBoxCSS(items?.info?.padding?.mobile)};																												
			}

			${vpTitleSl}{
			margin: ${getBoxCSS(items?.title?.margin?.mobile)};
			}

			${vpContainerSl}{
				padding: ${getBoxCSS(gallery?.padding?.mobile)};
			}

			${vpSubtitleSl}{
			margin: ${getBoxCSS(items?.subtitle?.margin?.mobile)};
			}

			${vpPageSl}{
			margin: ${getBoxCSS(gallery?.margin?.mobile)};
			border-radius: ${getBoxCSS(gallery?.borderRadius?.mobile)};
			}

		}

	`,
      }}
    />
  );
};
export default Style;
