import { mobileBreakpoint, tabBreakpoint } from "../../../../../../bpl-tools/utils/data";
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
	const mvgWrapperSl = `${mainSl} .mvg-wrapper`;
	const mvgWrapperContentSl = `${mvgWrapperSl} .mvg-wrapper-content`;
	const mvgGrid1Sl = `${mvgWrapperContentSl} .mvg-grid-1`;
	const mvgGrid1ColumnsSl = `${mvgGrid1Sl} .mvg-grid-1-columns`;
	const mvgGrid1CardSl = `${mvgGrid1ColumnsSl} .mvg-grid-1-card`;
	const mvgGrid1CardOverlaySl = `${mvgGrid1CardSl} .mvg-grid-1-card-overlay`;
	const mvgGrid1CardPlayBtnSl = `${mvgGrid1CardSl} .mvg-grid-1-card-play-btn`;
	const mvgGrid1CardPlayBtnInnerSl = `${mvgGrid1CardPlayBtnSl} .btn-inner`;
	// const mvgGrid1CardDurationSl = `${mvgGrid1CardSl} .mvg-grid-1-card-duration`;
	const mvgGrid1CardInfoSl = `${mvgGrid1CardSl} .mvg-grid-1-card-info`;
	const mvgGrid1CardTitleSl = `${mvgGrid1CardInfoSl} .mvg-grid-1-card-title`;


	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS("", items?.title?.typography)?.googleFontLink}
		
		${getTypoCSS(mvgGrid1CardTitleSl, items?.title?.typography)?.styles}



		${mvgGrid1CardPlayBtnInnerSl}{
			background: ${items?.playBtn?.bg};
			width: ${items?.playBtn?.size?.desktop};
			height: ${items?.playBtn?.size?.desktop};
			border-radius: ${getBoxCSS(items?.playBtn?.borderRadius)};
			transform: scale(${items?.playBtn?.scaleEffect});
			box-shadow: ${getMultiShadowCSS(items?.playBtn?.shadow)};
			
		}

		${mvgGrid1CardSl}:hover .mvg-grid-1-card-play-btn .btn-inner {
			transform: scale(${items?.playBtn?.hoverScaleEffect});
		}

		

		${mvgGrid1CardPlayBtnInnerSl} svg{
			stroke: ${items?.playBtn?.iconStrokeColor};
			fill: ${items?.playBtn?.iconFillColor};
			width: ${items?.playBtn?.iconSize?.desktop};
			height: ${items?.playBtn?.iconSize?.desktop};
		}



		${mvgGrid1CardPlayBtnInnerSl}:hover{
			background: ${items?.playBtn?.bgHoverColor};
		}










		${mvgGrid1CardOverlaySl}{
		  background: linear-gradient(to top, ${items?.bottomOverlay}, ${items?.middleOverlay}, transparent);
		}

		${mvgGrid1CardSl}{
		  border-radius: ${getBoxCSS(items?.borderRadius?.desktop)};
		  box-shadow: ${getMultiShadowCSS(items?.shadow)};
		  margin-bottom: ${gallery?.rowGap?.desktop}px;
		}

		${mvgGrid1CardSl} video{
		  object-fit: ${items?.video?.objectFit};
		}

		${mvgGrid1CardInfoSl}{
		  padding: ${getBoxCSS(items?.info?.padding?.desktop)};
		}

		${mvgGrid1CardTitleSl}{
		  color: ${items?.title?.color};
		  margin: ${getBoxCSS(items?.title?.margin?.desktop)};
		}

		${mvgWrapperSl} {
		  ${getBackgroundCSS(gallery?.background)}
		  ${getBorderCSS(gallery?.border)}
		  border-radius: ${getBoxCSS(gallery?.borderRadius?.desktop)};
		  box-shadow: ${getMultiShadowCSS(gallery?.shadow)};
		  margin: ${getBoxCSS(gallery?.margin?.desktop)};
		}




		${mvgGrid1Sl} {
		  padding: ${getBoxCSS(gallery?.padding?.desktop)};
		  max-width: ${gallery?.container?.maxWidth}px;

		  --height-tall: ${items?.video?.tallHeight?.desktop || '500px'};
		  --height-medium: ${items?.video?.mediumHeight?.desktop || '350px'};
		  --height-short: ${items?.video?.shortHeight?.desktop || '250px'};
		}

		${mvgGrid1ColumnsSl}{
		  column-count: ${gallery?.columns?.desktop};
		  column-gap: ${gallery?.columnGap?.desktop}px;
		}

		/* Custom heights for individual videos - Desktop */
		${attributes?.videos?.map((video) => {
			if (video.height === 'custom' && video.customHeight?.desktop) {
				return `${mvgGrid1CardSl}[data-video-id="${video.id}"] { height: ${video.customHeight.desktop} !important; }`;
			}
			return '';
		}).join('\n\t\t')}






		${tabBreakpoint}{
		  ${mvgGrid1Sl} {
			padding: ${getBoxCSS(gallery?.padding?.tablet)};
			--height-tall: ${items?.video?.tallHeight?.tablet || '500px'};
			--height-medium: ${items?.video?.mediumHeight?.tablet || '350px'};
			--height-short: ${items?.video?.shortHeight?.tablet || '250px'};
		  }

		  ${mvgGrid1ColumnsSl}{
			column-count: ${gallery?.columns?.tablet};
			column-gap: ${gallery?.columnGap?.tablet}px;
		  }

		  ${mvgWrapperSl} {
			border-radius: ${getBoxCSS(gallery?.borderRadius?.tablet)};
			margin: ${getBoxCSS(gallery?.margin?.tablet)};
		  }

		  ${mvgGrid1CardTitleSl}{
			margin: ${getBoxCSS(items?.title?.margin?.tablet)};
		  }


		  ${mvgGrid1CardInfoSl}{
		   padding: ${getBoxCSS(items?.info?.padding?.tablet)};
		  }

		  ${mvgGrid1CardSl}{
			border-radius: ${getBoxCSS(items?.borderRadius?.tablet)};
			margin-bottom: ${gallery?.rowGap?.tablet}px;
		  }

		  /* Custom heights for individual videos - Tablet */
		  ${attributes?.videos?.map((video) => {
			if (video.height === 'custom' && video.customHeight?.tablet) {
				return `${mvgGrid1CardSl}[data-video-id="${video.id}"] { height: ${video.customHeight.tablet} !important; }`;
			}
			return '';
		}).join('\n\t\t  ')}



		}

		${mobileBreakpoint}{
		  ${mvgGrid1Sl} {
			padding: ${getBoxCSS(gallery?.padding?.mobile)};
			--height-tall: ${items?.video?.tallHeight?.mobile || '500px'};
			--height-medium: ${items?.video?.mediumHeight?.mobile || '350px'};
			--height-short: ${items?.video?.shortHeight?.mobile || '250px'};
		  }

		  ${mvgGrid1ColumnsSl}{
			column-count: ${gallery?.columns?.mobile};
			column-gap: ${gallery?.columnGap?.mobile}px;
		  }

		  ${mvgWrapperSl} {
			border-radius: ${getBoxCSS(gallery?.borderRadius?.mobile)};
			margin: ${getBoxCSS(gallery?.margin?.mobile)};
		  }

		  ${mvgGrid1CardTitleSl}{
			margin: ${getBoxCSS(items?.title?.margin?.mobile)};
		  }

		  ${mvgGrid1CardInfoSl}{
		   padding: ${getBoxCSS(items?.info?.padding?.mobile)};
		  }

		  ${mvgGrid1CardSl}{
			border-radius: ${getBoxCSS(items?.borderRadius?.mobile)};
			margin-bottom: ${gallery?.rowGap?.mobile}px;
		  }

		  /* Custom heights for individual videos - Mobile */
		  ${attributes?.videos?.map((video) => {
			if (video.height === 'custom' && video.customHeight?.mobile) {
				return `${mvgGrid1CardSl}[data-video-id="${video.id}"] { height: ${video.customHeight.mobile} !important; }`;
			}
			return '';
		}).join('\n\t\t  ')}



		}

		
	`}} />;
};
export default Style;