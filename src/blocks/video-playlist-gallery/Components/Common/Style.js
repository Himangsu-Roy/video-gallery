import { mobileBreakpoint,tabBreakpoint } from "../../../../../../bpl-tools/utils/data";
import {
	getBackgroundCSS,
	getBorderBoxCSS,
	getBorderCSS,
	getBoxCSS,
	getMultiShadowCSS,
	getTypoCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes,id }) => {
	const { styles,options } = attributes;
	const { gallery,videoPlayer,sidebar } = styles;

	const mainSl = `#${id}`;
	const vpgMainContainerSl = `${mainSl} .vpg-main-container`;
	const vpgLayoutSl = `${vpgMainContainerSl} .vpg-layout`;
	const vpgPlayerWrapperSl = `${vpgLayoutSl} .vpg-player-wrapper`;
	const vpgVideoContainerSl = `${vpgPlayerWrapperSl} .vpg-video-container`;
	const vpgVideoWrapperSl = `${vpgVideoContainerSl} .vpg-video-wrapper`;
	// const vpgVideoPlayOverlayMainSl = `${vpgVideoWrapperSl} .vpg-play-overlay-main`;
	// const vpgVideoPlayButtonMainSl = `${vpgVideoPlayOverlayMainSl} .vpg-play-button-main`;
	const vpgVideoPlayControlsSl = `${vpgVideoWrapperSl} .vpg-controls`;
	const vpgVideoControlsInnerSl = `${vpgVideoPlayControlsSl} .vpg-controls-inner`;
	const vpgVideoControlsRowSl = `${vpgVideoControlsInnerSl} .vpg-controls-row`;
	const vpgVideoControlsLeftSl = `${vpgVideoControlsRowSl} .vpg-controls-left`;
	const vpgVideoControlButtonSl = `${vpgVideoControlsLeftSl} .vpg-control-button`;
	const vpgVideoVolumeControlSl = `${vpgVideoControlsLeftSl} .vpg-volume-control`;
	const vpgVideoVolumeControlInnerSl = `${vpgVideoVolumeControlSl} .vpg-control-button`;
	const vpgVideoControlsRightSl = `${vpgVideoControlsRowSl} .vpg-control-button`;
	const vpgVideoTimeDisplaySl = `${vpgVideoControlsLeftSl} .vpg-time-display`;
	const vpgVideoInfoSl = `${vpgVideoContainerSl} .vpg-video-info`;
	const vpgVideoInfoMetaTopSl = `${vpgVideoInfoSl} .vpg-video-meta-top`;
	const vpgVideoInfoMetaCategoryBadgeSl = `${vpgVideoInfoMetaTopSl} .vpg-category-badge`;
	const vpgVideoTitleMainSl = `${vpgVideoInfoSl} .vpg-video-title-main`;
	const vpgVideoDescriptionSl = `${vpgVideoInfoSl} .vpg-video-description`;

	// Sidebar
	const vpgLayoutSidebarWrapperSl = `${vpgLayoutSl} .vpg-sidebar-wrapper`;
	const vpgLayoutSidebarUpnextSl = `${vpgLayoutSidebarWrapperSl} .vpg-upnext-sidebar`;
	const vpgLayoutSidebarUpnextHeaderSl = `${vpgLayoutSidebarUpnextSl} .vpg-upnext-header`;
	const vpgLayoutSidebarUpnextHeaderTitleSl = `${vpgLayoutSidebarUpnextHeaderSl} .vpg-upnext-title`;
	const vpgLayoutSidebarUpnextHeaderCountSl = `${vpgLayoutSidebarUpnextHeaderSl} .vpg-upnext-count`;
	const vpgLayoutSidebarUpnextHeaderCloseSl = `${vpgLayoutSidebarUpnextHeaderSl} .vpg-upnext-close`;

	const vpgLayoutSidebarUpnextContentSl = `${vpgLayoutSidebarUpnextSl} .vpg-upnext-content`;
	const vpgLayoutSidebarUpnextListSl = `${vpgLayoutSidebarUpnextContentSl} .vpg-upnext-list`;
	const vpgLayoutSidebarUpnextItemSl = `${vpgLayoutSidebarUpnextListSl} .vpg-upnext-item`;
	const vpgLayoutSidebarUpnextItemInnerSl = `${vpgLayoutSidebarUpnextItemSl} .vpg-upnext-item-inner`;

	const vpgLayoutSidebarUpnextItemThumbnailSl = `${vpgLayoutSidebarUpnextItemInnerSl} .vpg-upnext-thumbnail`;
	const vpgLayoutSidebarUpnextNowPlayingSl = `${vpgLayoutSidebarUpnextItemThumbnailSl} .vpg-now-playing`;
	const vpgLayoutSidebarUpnextNowPlayingDurationSl = `${vpgLayoutSidebarUpnextItemThumbnailSl} .vpg-duration`;

	const vpgLayoutSidebarUpnextInfoSl = `${vpgLayoutSidebarUpnextItemInnerSl} .vpg-upnext-info`;
	const vpgLayoutSidebarUpnextInfoTitleSl = `${vpgLayoutSidebarUpnextInfoSl} .vpg-video-title`;
	const vpgLayoutSidebarUpnextInfoChannelNameSl = `${vpgLayoutSidebarUpnextInfoSl} .vpg-channel-name`;
	const vpgLayoutSidebarUpnextInfoMetaSl = `${vpgLayoutSidebarUpnextInfoSl} .vpg-video-meta`;
	const vpgLayoutSidebarToggleSl = `${vpgLayoutSl} .vpg-sidebar-toggle`;



	return <style dangerouslySetInnerHTML={{
		__html: `

		${getTypoCSS("",videoPlayer?.info?.category?.typography)?.googleFontLink}
		${getTypoCSS("",videoPlayer?.info?.title?.typography)?.googleFontLink}
		${getTypoCSS("",videoPlayer?.info?.description?.typography)?.googleFontLink}
		${getTypoCSS("",sidebar?.header?.title?.typography)?.googleFontLink}
		${getTypoCSS("",sidebar?.header?.count?.typography)?.googleFontLink}
		${getTypoCSS("",sidebar?.playlist?.info?.title?.typography)?.googleFontLink}
		${getTypoCSS("",sidebar?.playlist?.info?.subtitle?.typography)?.googleFontLink}
		${getTypoCSS("",sidebar?.playlist?.info?.videoMetadata?.typography)?.googleFontLink}
		${getTypoCSS("",sidebar?.playlist?.thumbnail?.duration?.typography)?.googleFontLink}
		${getTypoCSS("",sidebar?.upNextToggle?.typography)?.googleFontLink}
		${getTypoCSS("",sidebar?.playlist?.thumbnail?.activePlayBadge?.typography)?.googleFontLink}
		${getTypoCSS("",videoPlayer?.controls?.duration?.typography)?.googleFontLink}

	 	${getTypoCSS(vpgVideoInfoMetaCategoryBadgeSl,videoPlayer?.info?.category?.typography)?.styles}
	 	${getTypoCSS(vpgVideoTitleMainSl,videoPlayer?.info?.title?.typography)?.styles}
	 	${getTypoCSS(vpgVideoDescriptionSl,videoPlayer?.info?.description?.typography)?.styles}
	 	${getTypoCSS(vpgLayoutSidebarUpnextHeaderTitleSl,sidebar?.header?.title?.typography)?.styles}
	 	${getTypoCSS(vpgLayoutSidebarUpnextHeaderCountSl,sidebar?.header?.count?.typography)?.styles}
	 	${getTypoCSS(vpgLayoutSidebarUpnextInfoTitleSl,sidebar?.playlist?.info?.title?.typography)?.styles}
	 	${getTypoCSS(vpgLayoutSidebarUpnextInfoChannelNameSl,sidebar?.playlist?.info?.subtitle?.typography)?.styles}
	 	${getTypoCSS(vpgLayoutSidebarUpnextInfoMetaSl,sidebar?.playlist?.info?.videoMetadata?.typography)?.styles}
	 	${getTypoCSS(vpgLayoutSidebarUpnextNowPlayingDurationSl,sidebar?.playlist?.thumbnail?.duration?.typography)?.styles}
	 	${getTypoCSS(vpgLayoutSidebarToggleSl,sidebar?.upNextToggle?.typography)?.styles}
	 	${getTypoCSS(vpgLayoutSidebarUpnextNowPlayingSl,sidebar?.playlist?.thumbnail?.activePlayBadge?.typography)?.styles}
		${getTypoCSS(vpgVideoTimeDisplaySl,videoPlayer?.controls?.duration?.typography)?.styles}



		.vpg-upnext-item:hover .vpg-upnext-info .vpg-video-title:not(.vpg-current) {
            color: ${sidebar?.playlist?.playlistItemInner?.hoverTitleColor} !important;
        }

		${vpgVideoTimeDisplaySl} {
		  color: ${videoPlayer?.controls?.duration?.color};
		}

		${vpgVideoVolumeControlSl} .vpg-volume-slider::-webkit-slider-thumb {
			width: ${videoPlayer?.controls?.volume?.sliderThumb?.size};
			height: ${videoPlayer?.controls?.volume?.sliderThumb?.size};
			border-radius: ${getBoxCSS(videoPlayer?.controls?.volume?.sliderThumb?.borderRadius)};
			background-color: ${videoPlayer?.controls?.volume?.sliderThumb?.color};
			${getBorderCSS(videoPlayer?.controls?.volume?.sliderThumb?.border)};
		}


		${vpgVideoVolumeControlSl} .vpg-volume-slider::-moz-range-thumb {
			width: ${videoPlayer?.controls?.volume?.sliderThumb?.size};
			height: ${videoPlayer?.controls?.volume?.sliderThumb?.size};
			border-radius: ${getBoxCSS(videoPlayer?.controls?.volume?.sliderThumb?.borderRadius)};
			background-color: ${videoPlayer?.controls?.volume?.sliderThumb?.color};
			${getBorderCSS(videoPlayer?.controls?.volume?.sliderThumb?.border)};
		}


		${vpgVideoVolumeControlSl} .vpg-volume-slider{
			background-color: ${videoPlayer?.controls?.volume?.color};
			height: ${videoPlayer?.controls?.volume?.height};
		}


		${vpgVideoControlsInnerSl} .vpg-progress-bar::-webkit-slider-thumb {
			width: ${videoPlayer?.controls?.progressBar?.sliderThumb?.size};
			height: ${videoPlayer?.controls?.progressBar?.sliderThumb?.size};
			border-radius: ${getBoxCSS(videoPlayer?.controls?.progressBar?.sliderThumb?.borderRadius)};
			background-color: ${videoPlayer?.controls?.progressBar?.sliderThumb?.color};
			${getBorderCSS(videoPlayer?.controls?.progressBar?.sliderThumb?.border)};
        }

        ${vpgVideoControlsInnerSl} .vpg-progress-bar::-moz-range-thumb {
			width: ${videoPlayer?.controls?.progressBar?.sliderThumb?.size};
			height: ${videoPlayer?.controls?.progressBar?.sliderThumb?.size};
			border-radius: ${getBoxCSS(videoPlayer?.controls?.progressBar?.sliderThumb?.borderRadius)};
			background-color: ${videoPlayer?.controls?.progressBar?.sliderThumb?.color};
			${getBorderCSS(videoPlayer?.controls?.progressBar?.sliderThumb?.border)};
        }

		${vpgVideoControlsInnerSl} .vpg-progress-bar{
			background-color: ${videoPlayer?.controls?.progressBar?.color};
			height: ${videoPlayer?.controls?.progressBar?.height};
		}

		${vpgVideoControlsInnerSl} .vpg-progress-bar:hover{
			height: ${videoPlayer?.controls?.progressBar?.hoverHeight};
		}

		${vpgVideoControlsInnerSl}{
			padding: ${getBoxCSS(videoPlayer?.controls?.padding?.desktop)};
		}

		${vpgVideoControlsLeftSl}{
			gap: ${videoPlayer?.controls?.gap?.desktop};
		}

		${vpgVideoPlayControlsSl}{
			background: linear-gradient(to top, ${videoPlayer?.controls?.bottomOverlayColor}, transparent);
		}

		${vpgVideoVolumeControlInnerSl}, ${vpgVideoControlButtonSl}, ${vpgVideoControlsRightSl}{
			color: ${videoPlayer?.controls?.color};
		}

		${vpgVideoVolumeControlInnerSl}:hover, ${vpgVideoControlButtonSl}:hover, ${vpgVideoControlsRightSl}:hover{
			color: ${videoPlayer?.controls?.hoverColor};
		}

		${vpgLayoutSidebarUpnextNowPlayingSl}{
			background-color: ${sidebar?.playlist?.thumbnail?.activePlayBadge?.backgroundColor};
			color: ${sidebar?.playlist?.thumbnail?.activePlayBadge?.color};
			padding: ${getBoxCSS(sidebar?.playlist?.thumbnail?.activePlayBadge?.padding?.desktop)};
			border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.activePlayBadge?.borderRadius?.desktop)};
			${getBorderCSS(sidebar?.playlist?.thumbnail?.activePlayBadge?.border)}
		}

		${vpgLayoutSidebarToggleSl}{
			background-color: ${sidebar?.upNextToggle?.backgroundColor};
			color: ${sidebar?.upNextToggle?.color};
			padding: ${getBoxCSS(sidebar?.upNextToggle?.padding?.desktop)};
			border-radius: ${getBoxCSS(sidebar?.upNextToggle?.borderRadius?.desktop)};
			box-shadow: ${getMultiShadowCSS(sidebar?.upNextToggle?.shadow)};
		}

		${vpgLayoutSidebarUpnextNowPlayingDurationSl}{
			background-color: ${sidebar?.playlist?.thumbnail?.duration?.backgroundColor};
			color: ${sidebar?.playlist?.thumbnail?.duration?.color};
			padding: ${getBoxCSS(sidebar?.playlist?.thumbnail?.duration?.padding?.desktop)};
			border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.duration?.borderRadius?.desktop)};
		}

		${vpgLayoutSidebarUpnextItemThumbnailSl} .vpg-play-overlay{
			background-color: ${sidebar?.playlist?.thumbnail?.overlayColor};
		}

		${vpgLayoutSidebarUpnextItemThumbnailSl}{
			width: ${sidebar?.playlist?.thumbnail?.width};
			border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.borderRadius?.desktop)};
		}
		

		${vpgLayoutSidebarUpnextItemInnerSl}{
			gap: ${sidebar?.playlist?.playlistItemInner?.gap?.desktop};
			padding: ${getBoxCSS(sidebar?.playlist?.playlistItemInner?.padding?.desktop)};
			border-radius: ${getBoxCSS(sidebar?.playlist?.playlistItemInner?.borderRadius?.desktop)};
		}

		${vpgLayoutSidebarUpnextItemInnerSl}:hover{
			background-color: ${sidebar?.playlist?.playlistItemInner?.hoverBgColor};
		}

		${vpgLayoutSidebarUpnextItemInnerSl}.vpg-current{
			background-color: ${sidebar?.playlist?.playlistItemActive?.background};
			${getBorderCSS(sidebar?.playlist?.playlistItemActive?.border)}
		}

		${vpgLayoutSidebarUpnextListSl}{
			padding: ${getBoxCSS(sidebar?.playlist?.padding?.desktop)};
			gap: ${sidebar?.playlist?.gap?.desktop};
		}

		${vpgLayoutSidebarUpnextInfoMetaSl}{
			color: ${sidebar?.playlist?.info?.videoMetadata?.color};
			margin: ${getBoxCSS(sidebar?.playlist?.info?.videoMetadata?.margin?.desktop)};
		}

		${vpgLayoutSidebarUpnextInfoChannelNameSl}{
			color: ${sidebar?.playlist?.info?.subtitle?.color};
			margin: ${getBoxCSS(sidebar?.playlist?.info?.subtitle?.margin?.desktop)};
		}

		${vpgLayoutSidebarUpnextInfoTitleSl}{
			color: ${sidebar?.playlist?.info?.title?.color};
			margin: ${getBoxCSS(sidebar?.playlist?.info?.title?.margin?.desktop)};
		}

		${vpgLayoutSidebarUpnextHeaderSl}{
		   padding: ${getBoxCSS(sidebar?.header?.padding?.desktop)};
		   ${getBorderBoxCSS({
			bottom: sidebar?.header?.borderBottom
		})}
		}

		${vpgLayoutSidebarUpnextHeaderCountSl}{
			color: ${sidebar?.header?.count?.color};
			margin: ${getBoxCSS(sidebar?.header?.count?.margin?.desktop)};
		}

		${vpgLayoutSidebarUpnextHeaderTitleSl}{
			color: ${sidebar?.header?.title?.color};
			margin: ${getBoxCSS(sidebar?.header?.title?.margin?.desktop)};
		}

		${vpgLayoutSidebarUpnextHeaderCloseSl} svg{
			color: ${sidebar?.header?.close?.color};
			width: ${sidebar?.header?.close?.size?.desktop};
			height: ${sidebar?.header?.close?.size?.desktop};
		}

		${vpgLayoutSidebarUpnextHeaderCloseSl}{
			padding: ${getBoxCSS(sidebar?.header?.close?.padding?.desktop)};
			margin: ${getBoxCSS(sidebar?.header?.close?.margin?.desktop)};
			border-radius: ${getBoxCSS(sidebar?.header?.close?.borderRadius?.desktop)};
		} 

		${vpgLayoutSidebarUpnextHeaderCloseSl}:hover{
			background-color: ${sidebar?.header?.close?.hoverBgColor};
		}

		${vpgLayoutSidebarWrapperSl}{
			width: ${sidebar?.width?.desktop};
			${getBorderBoxCSS({
			left: sidebar?.borderLeft
			})}
			${getBackgroundCSS(sidebar?.background)}
		}


		${vpgVideoInfoSl}{
			padding: ${getBoxCSS(videoPlayer?.info?.padding?.desktop)};
			gap: ${getBoxCSS(videoPlayer?.info?.gap?.desktop)};
		}

		${vpgVideoDescriptionSl}{
			color: ${videoPlayer?.info?.description?.color};
			margin: ${getBoxCSS(videoPlayer?.info?.description?.margin?.desktop)};
		}

		${vpgVideoTitleMainSl}{
			color: ${videoPlayer?.info?.title?.color};
			margin: ${getBoxCSS(videoPlayer?.info?.title?.margin?.desktop)};
		}

		${vpgVideoInfoMetaCategoryBadgeSl}{
			color: ${videoPlayer?.info?.category?.color};
			background-color: ${videoPlayer?.info?.category?.backgroundColor};
			padding: ${getBoxCSS(videoPlayer?.info?.category?.padding?.desktop)};
			${getBorderCSS(videoPlayer?.info?.category?.border)}
			border-radius: ${getBoxCSS(videoPlayer?.info?.category?.borderRadius?.desktop)};
		}

		${vpgVideoInfoMetaTopSl}{
			margin: ${getBoxCSS(videoPlayer?.info?.category?.margin?.desktop)};
		}


		${vpgMainContainerSl}, ${vpgVideoWrapperSl}{	
			${getBackgroundCSS(videoPlayer?.background)}
		}

		${vpgMainContainerSl}{
			padding: ${getBoxCSS(gallery?.padding?.desktop)};
			margin: ${getBoxCSS(gallery?.margin?.desktop)};
			${getBorderCSS(gallery?.border)}
			box-shadow: ${getMultiShadowCSS(gallery?.shadow)};
			border-radius: ${getBoxCSS(gallery?.borderRadius?.desktop)};
		}


		${vpgVideoWrapperSl} video{
		   object-fit: ${options?.objectFit};
		}





		${tabBreakpoint}{

			${vpgVideoControlsInnerSl}{
				padding: ${getBoxCSS(videoPlayer?.controls?.padding?.tablet)};
			}

			${vpgVideoControlsLeftSl}{
				gap: ${videoPlayer?.controls?.gap?.tablet};
			}


			${vpgLayoutSidebarUpnextNowPlayingSl}{
				padding: ${getBoxCSS(sidebar?.playlist?.thumbnail?.activePlayBadge?.padding?.tablet)};
				border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.activePlayBadge?.borderRadius?.tablet)};
			}

			${vpgLayoutSidebarToggleSl}{
				padding: ${getBoxCSS(sidebar?.upNextToggle?.padding?.tablet)};
				border-radius: ${getBoxCSS(sidebar?.upNextToggle?.borderRadius?.tablet)};
			}

			${vpgLayoutSidebarUpnextNowPlayingDurationSl}{
				padding: ${getBoxCSS(sidebar?.playlist?.thumbnail?.duration?.padding?.tablet)};
				border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.duration?.borderRadius?.tablet)};
			}


			${vpgLayoutSidebarUpnextItemThumbnailSl}{
				border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.borderRadius?.tablet)};
			}
			

			${vpgLayoutSidebarUpnextItemInnerSl}{
				gap: ${sidebar?.playlist?.playlistItemInner?.gap?.tablet};
				padding: ${getBoxCSS(sidebar?.playlist?.playlistItemInner?.padding?.tablet)};
				border-radius: ${getBoxCSS(sidebar?.playlist?.playlistItemInner?.borderRadius?.tablet)};
			}

			${vpgLayoutSidebarUpnextListSl}{
				padding: ${getBoxCSS(sidebar?.playlist?.padding?.tablet)};
				gap: ${sidebar?.playlist?.gap?.tablet};
			}

			${vpgLayoutSidebarUpnextInfoMetaSl}{
				margin: ${getBoxCSS(sidebar?.playlist?.info?.videoMetadata?.margin?.tablet)};
			}

			${vpgLayoutSidebarUpnextInfoChannelNameSl}{
				margin: ${getBoxCSS(sidebar?.playlist?.info?.subtitle?.margin?.tablet)};
			}

			${vpgLayoutSidebarUpnextInfoTitleSl}{
				margin: ${getBoxCSS(sidebar?.playlist?.info?.title?.margin?.tablet)};
			}

			${vpgLayoutSidebarUpnextHeaderSl}{
			padding: ${getBoxCSS(sidebar?.header?.padding?.tablet)};
			}

			${vpgLayoutSidebarUpnextHeaderCountSl}{
				margin: ${getBoxCSS(sidebar?.header?.count?.margin?.tablet)};
			}

			${vpgLayoutSidebarUpnextHeaderTitleSl}{
				margin: ${getBoxCSS(sidebar?.header?.title?.margin?.tablet)};
			}

			${vpgLayoutSidebarUpnextHeaderCloseSl} svg{
				width: ${sidebar?.header?.close?.size?.tablet};
				height: ${sidebar?.header?.close?.size?.tablet};
			}

			${vpgLayoutSidebarUpnextHeaderCloseSl}{
				padding: ${getBoxCSS(sidebar?.header?.close?.padding?.tablet)};
				margin: ${getBoxCSS(sidebar?.header?.close?.margin?.tablet)};
				border-radius: ${getBoxCSS(sidebar?.header?.close?.borderRadius?.tablet)};
			}

			${vpgLayoutSidebarWrapperSl}{
				width: ${sidebar?.width?.tablet};
			}

			${vpgVideoInfoSl}{
				padding: ${getBoxCSS(videoPlayer?.info?.padding?.tablet)};
				gap: ${getBoxCSS(videoPlayer?.info?.gap?.tablet)};
			}

			${vpgVideoDescriptionSl}{
				margin: ${getBoxCSS(videoPlayer?.info?.description?.margin?.tablet)};
			}

			${vpgVideoTitleMainSl}{
				margin: ${getBoxCSS(videoPlayer?.info?.title?.margin?.tablet)};
			}

			${vpgVideoInfoMetaCategoryBadgeSl}{
				padding: ${getBoxCSS(videoPlayer?.info?.category?.padding?.tablet)};
				border-radius: ${getBoxCSS(videoPlayer?.info?.category?.borderRadius?.tablet)};
			}

			${vpgVideoInfoMetaTopSl}{
				margin: ${getBoxCSS(videoPlayer?.info?.category?.margin?.tablet)};
			}


			${vpgMainContainerSl}{
				padding: ${getBoxCSS(gallery?.padding?.tablet)};
				margin: ${getBoxCSS(gallery?.margin?.tablet)};
				border-radius: ${getBoxCSS(gallery?.borderRadius?.tablet)};
			}

		}


		${mobileBreakpoint}{
			${vpgVideoControlsInnerSl}{
				padding: ${getBoxCSS(videoPlayer?.controls?.padding?.mobile)};
			}

			${vpgVideoControlsLeftSl}{
				gap: ${videoPlayer?.controls?.gap?.mobile};
			}


			${vpgLayoutSidebarUpnextNowPlayingSl}{
				padding: ${getBoxCSS(sidebar?.playlist?.thumbnail?.activePlayBadge?.padding?.mobile)};
				border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.activePlayBadge?.borderRadius?.mobile)};
			}

			${vpgLayoutSidebarToggleSl}{
				padding: ${getBoxCSS(sidebar?.upNextToggle?.padding?.mobile)};
				border-radius: ${getBoxCSS(sidebar?.upNextToggle?.borderRadius?.mobile)};
			}

			${vpgLayoutSidebarUpnextNowPlayingDurationSl}{
				padding: ${getBoxCSS(sidebar?.playlist?.thumbnail?.duration?.padding?.mobile)};
				border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.duration?.borderRadius?.mobile)};
			}


			${vpgLayoutSidebarUpnextItemThumbnailSl}{
				border-radius: ${getBoxCSS(sidebar?.playlist?.thumbnail?.borderRadius?.mobile)};
			}
			

			${vpgLayoutSidebarUpnextItemInnerSl}{
				gap: ${sidebar?.playlist?.playlistItemInner?.gap?.mobile};
				padding: ${getBoxCSS(sidebar?.playlist?.playlistItemInner?.padding?.mobile)};
				border-radius: ${getBoxCSS(sidebar?.playlist?.playlistItemInner?.borderRadius?.mobile)};
			}

			${vpgLayoutSidebarUpnextListSl}{
				padding: ${getBoxCSS(sidebar?.playlist?.padding?.mobile)};
				gap: ${sidebar?.playlist?.gap?.mobile};
			}

			${vpgLayoutSidebarUpnextInfoMetaSl}{
				margin: ${getBoxCSS(sidebar?.playlist?.info?.videoMetadata?.margin?.mobile)};
			}

			${vpgLayoutSidebarUpnextInfoChannelNameSl}{
				margin: ${getBoxCSS(sidebar?.playlist?.info?.subtitle?.margin?.mobile)};
			}

			${vpgLayoutSidebarUpnextInfoTitleSl}{
				margin: ${getBoxCSS(sidebar?.playlist?.info?.title?.margin?.mobile)};
			}

			${vpgLayoutSidebarUpnextHeaderSl}{
			padding: ${getBoxCSS(sidebar?.header?.padding?.mobile)};
			}

			${vpgLayoutSidebarUpnextHeaderCountSl}{
				margin: ${getBoxCSS(sidebar?.header?.count?.margin?.mobile)};
			}

			${vpgLayoutSidebarUpnextHeaderTitleSl}{
				margin: ${getBoxCSS(sidebar?.header?.title?.margin?.mobile)};
			}

			${vpgLayoutSidebarUpnextHeaderCloseSl} svg{
				width: ${sidebar?.header?.close?.size?.mobile};
				height: ${sidebar?.header?.close?.size?.mobile};
			}

			${vpgLayoutSidebarUpnextHeaderCloseSl}{
				padding: ${getBoxCSS(sidebar?.header?.close?.padding?.mobile)};
				margin: ${getBoxCSS(sidebar?.header?.close?.margin?.mobile)};
				border-radius: ${getBoxCSS(sidebar?.header?.close?.borderRadius?.mobile)};
			}

			${vpgLayoutSidebarWrapperSl}{
				width: ${sidebar?.width?.mobile};
			}

			${vpgVideoInfoSl}{
				padding: ${getBoxCSS(videoPlayer?.info?.padding?.mobile)};
				gap: ${getBoxCSS(videoPlayer?.info?.gap?.mobile)};
			}

			${vpgVideoDescriptionSl}{
				margin: ${getBoxCSS(videoPlayer?.info?.description?.margin?.mobile)};
			}

			${vpgVideoTitleMainSl}{
				margin: ${getBoxCSS(videoPlayer?.info?.title?.margin?.mobile)};
			}

			${vpgVideoInfoMetaCategoryBadgeSl}{
				padding: ${getBoxCSS(videoPlayer?.info?.category?.padding?.mobile)};
				border-radius: ${getBoxCSS(videoPlayer?.info?.category?.borderRadius?.mobile)};
			}

			${vpgVideoInfoMetaTopSl}{
				margin: ${getBoxCSS(videoPlayer?.info?.category?.margin?.mobile)};
			}


			${vpgMainContainerSl}{
				padding: ${getBoxCSS(gallery?.padding?.mobile)};
				margin: ${getBoxCSS(gallery?.margin?.mobile)};
				border-radius: ${getBoxCSS(gallery?.borderRadius?.mobile)};
			}
		}
		

	`}} />;
}
export default Style; 