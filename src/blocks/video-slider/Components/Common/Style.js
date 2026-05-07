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

  const mainSl = `#${id}`;
  const videoSliderSl = `${mainSl} .video-slider`;
  const videoSliderContainerSl = `${videoSliderSl} .video-slider__container`;
  const videoSliderWrapperSl = `${videoSliderContainerSl} .video-slider__wrapper`;
  const navButtonLeftSl = `${videoSliderWrapperSl} .nav-button--left`;
  const navButtonRightSl = `${videoSliderWrapperSl} .nav-button--right`;
  const sliderTrackSl = `${videoSliderWrapperSl} .video-slider__track`;
  const videoSlideSl = `${sliderTrackSl} .slide`;
  const videoSlideContentSl = `${videoSlideSl} .slide__content`;
  const videoSlideOverlaySl = `${videoSlideContentSl} .slide__overlay`;
  const slideVideo = `${videoSlideContentSl} .slide__video`;
  const videoSlideOverlay = `${videoSlideContentSl} .slide__play-overlay`;
  const slidePlayButtonSl = `${videoSlideOverlay} .slide__play-btn`;
  const slideInfoSl = `${videoSlideContentSl} .slide__info`;
  const slideTitleSl = `${slideInfoSl} .title`;
  const slideStarsSl = `${slideInfoSl} .stars`;
  const slideDotsSl = `${videoSliderWrapperSl} .dots`;
  const slideDotSl = `${slideDotsSl} .dot`;
  const slideDotActiveSl = `${slideDotSl}--active`;

  // Desktop
  const centerWidthDesktop = items.video.width.desktop; // 320px
  const centerHeightDesktop = items.video.height.desktop; // 384px

  const adjacentWidthDesktop = Math.round(centerWidthDesktop * 0.8); // 256px
  const adjacentHeightDesktop = Math.round(centerHeightDesktop * 0.8333); // 320px

  const sideWidthDesktop = Math.round(centerWidthDesktop * 0.6); // 192px
  const sideHeightDesktop = Math.round(centerHeightDesktop * 0.6667); // 256px

  // Tablet
  const centerWidthTablet = items.video.width.tablet; // 240px
  const centerHeightTablet = items.video.height.tablet; // 288px

  const adjacentWidthTablet = Math.round(centerWidthTablet * 0.8); // 192px
  const adjacentHeightTablet = Math.round(centerHeightTablet * 0.8333); // 240px

  const sideWidthTablet = Math.round(centerWidthTablet * 0.6); // 144px
  const sideHeightTablet = Math.round(centerHeightTablet * 0.6667); // 192px

  // Mobile
  const centerWidthMobile = items.video.width.mobile; // 160px
  const centerHeightMobile = items.video.height.mobile; // 192px

  const adjacentWidthMobile = Math.round(centerWidthMobile * 0.8); // 128px
  const adjacentHeightMobile = Math.round(centerHeightMobile * 0.8333); // 160px

  const sideWidthMobile = Math.round(centerWidthMobile * 0.6); // 96px
  const sideHeightMobile = Math.round(centerHeightMobile * 0.6667); // 128px

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

		${getTypoCSS("", items?.title?.typography)?.googleFontLink}
		

		${getTypoCSS(slideTitleSl, items?.title?.typography)?.styles}


		${sliderTrackSl} .slide--adjacent{
			width: ${adjacentWidthDesktop}px;
    		height: ${adjacentHeightDesktop}px;
		}

		${sliderTrackSl} .slide--center{
			width: ${centerWidthDesktop}px;
			height: ${centerHeightDesktop}px;
		}

		${sliderTrackSl} .slide--side{
			width: ${sideWidthDesktop}px;
			height: ${sideHeightDesktop}px;
		}


		${slideDotsSl}{
		  gap: ${items?.dots?.gap?.desktop};
		  margin: ${getBoxCSS(items?.dots?.margin?.desktop)};
		}

		${slideDotSl}{
			width: ${items?.dots?.size?.desktop};
			height: ${items?.dots?.size?.desktop};
			background-color: ${items?.dots?.bgColor};
			border-radius: ${getBoxCSS(items?.dots?.borderRadius?.desktop)};
			${getBorderCSS(items?.dots?.border)}
			box-shadow: ${getMultiShadowCSS(items?.dots?.shadow)};
		}

		${slideDotActiveSl}{
		   background-color: ${items?.dots?.bgActiveColor};
		   transform: scale(${items?.dots?.activeScaleEffect});
		   ${getBorderCSS(items?.dots?.activeBorder)}
		}

		${navButtonLeftSl} svg{
			stroke: ${items?.navigation?.iconStrokeColor};
			fill: ${items?.navigation?.iconFillColor};
			width: ${items?.navigation?.iconSize?.desktop};
			height: ${items?.navigation?.iconSize?.desktop};
		}

		${navButtonRightSl} svg{
			stroke: ${items?.navigation?.iconStrokeColor};
			fill: ${items?.navigation?.iconFillColor};
			width: ${items?.navigation?.iconSize?.desktop};
			height: ${items?.navigation?.iconSize?.desktop};
		}


		${navButtonLeftSl} {
		  left: ${items?.navigation?.position?.horizontal?.desktop};
		}

		${navButtonRightSl} {
		  right: ${items?.navigation?.position?.horizontal?.desktop};
		}

		${navButtonLeftSl}:hover svg{
			stroke: ${items?.navigation?.iconStrokeHoverColor};
			fill: ${items?.navigation?.iconFillHoverColor};
		}

		${navButtonRightSl}:hover svg{
			stroke: ${items?.navigation?.iconStrokeHoverColor};
			fill: ${items?.navigation?.iconFillHoverColor};
		}

		${videoSliderWrapperSl} .nav-button {
			background-color: ${items?.navigation?.bgColor};
			padding: ${getBoxCSS(items?.navigation?.padding?.desktop)};
			${getBorderCSS(items?.navigation?.border)}
			border-radius: ${getBoxCSS(items?.navigation?.borderRadius?.desktop)};
			box-shadow: ${getMultiShadowCSS(items?.navigation?.shadow)};
			top: ${items?.navigation?.position?.vertical?.desktop};
		}

		${videoSliderWrapperSl} .nav-button:hover {
			background-color: ${items?.navigation?.hoverBgColor};
			transform: translateY(-50%) scale(${items?.navigation?.scaleEffect}); 
			box-shadow: ${getMultiShadowCSS(items?.navigation?.hoverShadow)};
			
		}

		${slidePlayButtonSl}{
			background-color: ${items?.playBtn?.bg};
			border-radius: ${getBoxCSS(items?.playBtn?.borderRadius)};
			padding: ${getBoxCSS(items?.playBtn?.padding)};
			box-shadow: ${getMultiShadowCSS(items?.playBtn?.shadow)};
		}

		${slidePlayButtonSl}:hover{
			background-color: ${items?.playBtn?.bgHoverColor};
			padding: ${getBoxCSS(items?.playBtn?.hoverPadding)};
			transform: scale(${items?.playBtn?.scaleEffect});
		}

		${slidePlayButtonSl} svg{
			fill: ${items?.playBtn?.iconFillColor};
			stroke: ${items?.playBtn?.iconStrokeColor};
			width: ${items?.playBtn?.iconSize?.desktop};
			height: ${items?.playBtn?.iconSize?.desktop};
		}

		${videoSlideContentSl}{
		  border-radius: ${getBoxCSS(items?.borderRadius?.desktop)};
		  box-shadow: ${getMultiShadowCSS(items?.shadow)};
		}

		${slideInfoSl}{
		  padding: ${getBoxCSS(items?.info?.padding?.desktop)};
		}

		${videoSlideOverlay}{
		  background-color: ${items?.overlay};
		}

		
		${videoSlideSl}:hover{
		  opacity: ${items?.hoverOpacity};
		}


		${videoSlideOverlaySl}{
		  background: linear-gradient(to top, ${items?.bottomOverlay}, transparent 40%);
		}


		${slideStarsSl}{
		  gap: ${items?.rating?.gap?.desktop};
		  margin: ${getBoxCSS(items?.rating?.margin?.desktop)};
		}

		${slideStarsSl} .star{
		  width: ${items?.rating?.size?.desktop};
     	  height: ${items?.rating?.size?.desktop};
		}

		${slideStarsSl} .star--filled{
		  color: ${items?.rating?.color};
		  fill: ${items?.rating?.color};
		}

		${slideVideo}{
		  object-fit: ${items?.video?.objectFit || "cover"};
		}

		${sliderTrackSl}{
		  gap: ${gallery?.columnGap?.desktop}px;
		  padding: ${getBoxCSS(items?.padding?.desktop)};
		}

		${slideTitleSl}{
		  margin: ${getBoxCSS(items?.title?.margin?.desktop)};
		  color: ${items?.title?.color};
		}
		
		${videoSliderSl}{
		  ${getBackgroundCSS(gallery?.background)}
		  ${getBorderCSS(gallery?.border)}
		  border-radius: ${getBoxCSS(gallery?.borderRadius?.desktop)};
		  box-shadow: ${getMultiShadowCSS(gallery?.shadow)};
		  margin: ${getBoxCSS(gallery?.margin?.desktop)};
		  padding: ${getBoxCSS(gallery?.padding?.desktop)};
		}

		${videoSliderContainerSl}{
		  max-width: ${gallery?.container?.maxWidth}px;
		}


		${tabBreakpoint} {
		  ${videoSliderSl}{
		  	margin: ${getBoxCSS(gallery?.margin?.tablet)};
			padding: ${getBoxCSS(gallery?.padding?.tablet)};
			border-radius: ${getBoxCSS(gallery?.borderRadius?.tablet)};
		  }

		  ${slideTitleSl}{
			margin: ${getBoxCSS(items?.title?.margin?.tablet)};
		  }

		  ${sliderTrackSl}{
		    gap: ${gallery?.columnGap?.tablet}px;
			padding: ${getBoxCSS(items?.padding?.tablet)};
		  }

		  ${slideDotsSl}{
			gap: ${items?.dots?.gap?.tablet};
			margin: ${getBoxCSS(items?.dots?.margin?.tablet)};
		  }

		  ${slideDotSl}{
			width: ${items?.dots?.size?.tablet};
			height: ${items?.dots?.size?.tablet};
			border-radius: ${getBoxCSS(items?.dots?.borderRadius?.tablet)};
		  }

		  ${navButtonLeftSl} svg{
			width: ${items?.navigation?.iconSize?.tablet};
			height: ${items?.navigation?.iconSize?.tablet};
		  }

		  ${navButtonRightSl} svg{
			width: ${items?.navigation?.iconSize?.tablet};
			height: ${items?.navigation?.iconSize?.tablet};
		  }

		  ${navButtonLeftSl} {
		    left: ${items?.navigation?.position?.horizontal?.tablet};
		  }

		  ${navButtonRightSl} {
			right: ${items?.navigation?.position?.horizontal?.tablet};
		  }

		  ${videoSliderWrapperSl} .nav-button {
			padding: ${getBoxCSS(items?.navigation?.padding?.tablet)};
			border-radius: ${getBoxCSS(items?.navigation?.borderRadius?.tablet)};
			top: ${items?.navigation?.position?.vertical?.tablet};
		  }

		  ${slidePlayButtonSl} svg{
			width: ${items?.playBtn?.iconSize?.tablet};
			height: ${items?.playBtn?.iconSize?.tablet};
		  }

		  ${videoSlideContentSl}{
			border-radius: ${getBoxCSS(items?.borderRadius?.tablet)};
		  }

		  ${slideInfoSl}{
		    padding: ${getBoxCSS(items?.info?.padding?.tablet)};
		  }

		  ${slideStarsSl}{
			gap: ${items?.rating?.gap?.tablet};
			margin: ${getBoxCSS(items?.rating?.margin?.tablet)};
		  }

		  ${slideStarsSl} .star{
			width: ${items?.rating?.size?.tablet};
			height: ${items?.rating?.size?.tablet};
		  }




		  ${sliderTrackSl} .slide--adjacent{
			width: ${adjacentWidthTablet}px;
    		height: ${adjacentHeightTablet}px;
		 }

		 ${sliderTrackSl} .slide--center{
			width: ${centerWidthTablet}px;
			height: ${centerHeightTablet}px;
		 }

		 ${sliderTrackSl} .slide--side{
			width: ${sideWidthTablet}px;
			height: ${sideHeightTablet}px;
		 }



		}




		${mobileBreakpoint} {
		  ${videoSliderSl}{
		  	margin: ${getBoxCSS(gallery?.margin?.mobile)};
			padding: ${getBoxCSS(gallery?.padding?.mobile)};
			border-radius: ${getBoxCSS(gallery?.borderRadius?.mobile)};
		  }

		  ${slideTitleSl}{
			margin: ${getBoxCSS(items?.title?.margin?.mobile)};
		  }

		  ${sliderTrackSl}{
		    gap: ${gallery?.columnGap?.mobile}px;
			padding: ${getBoxCSS(items?.padding?.mobile)};
		  }

		  ${slideDotsSl}{
			gap: ${items?.dots?.gap?.mobile};
			margin: ${getBoxCSS(items?.dots?.margin?.mobile)};
		  }

		  ${slideDotSl}{
			width: ${items?.dots?.size?.tablet};
			height: ${items?.dots?.size?.tablet};
			border-radius: ${getBoxCSS(items?.dots?.borderRadius?.tablet)};
		  }

		  ${navButtonLeftSl} svg{
			width: ${items?.navigation?.iconSize?.mobile};
			height: ${items?.navigation?.iconSize?.mobile};
		  }

		  ${navButtonRightSl} svg{
			width: ${items?.navigation?.iconSize?.mobile};
			height: ${items?.navigation?.iconSize?.mobile};
		  }

		  ${navButtonLeftSl} {
		    left: ${items?.navigation?.position?.horizontal?.mobile};
		  }

		  ${navButtonRightSl} {
			right: ${items?.navigation?.position?.horizontal?.mobile};
		  }

		  ${videoSliderWrapperSl} .nav-button {
			padding: ${getBoxCSS(items?.navigation?.padding?.mobile)};
			border-radius: ${getBoxCSS(items?.navigation?.borderRadius?.mobile)};
			top: ${items?.navigation?.position?.vertical?.mobile};
		  }

		  ${slidePlayButtonSl} svg{
			width: ${items?.playBtn?.iconSize?.mobile};
			height: ${items?.playBtn?.iconSize?.mobile};
		  }

		  ${videoSlideContentSl}{
			border-radius: ${getBoxCSS(items?.borderRadius?.mobile)};
		  }

		  ${slideInfoSl}{
		    padding: ${getBoxCSS(items?.info?.padding?.mobile)};
		  }

		  ${slideStarsSl}{
			gap: ${items?.rating?.gap?.mobile};
			margin: ${getBoxCSS(items?.rating?.margin?.mobile)};
		  }

		  ${slideStarsSl} .star{
			width: ${items?.rating?.size?.mobile};
			height: ${items?.rating?.size?.mobile};
		  }


		 ${sliderTrackSl} .slide--adjacent{
			width: ${adjacentWidthMobile}px;
    		height: ${adjacentHeightMobile}px;
		 }

		 ${sliderTrackSl} .slide--center{
			width: ${centerWidthMobile}px;
			height: ${centerHeightMobile}px;
		 }

		 ${sliderTrackSl} .slide--side{
			width: ${sideWidthMobile}px;
			height: ${sideHeightMobile}px;
		 }



		}

	`,
      }}
    />
  );
};
export default Style;
