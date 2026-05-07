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
  const { items, gallery } = attributes;

  const mainSl = `#${id}`;
  const sliderAutoplayVideoSl = `${mainSl} .base-template`;
  const sliderAutoplayVideoWrapperSl = `${sliderAutoplayVideoSl} .base-template__wrapper`;
  const sliderAutoplayVideoContentSl = `${sliderAutoplayVideoWrapperSl} .base-template__content`;
  const videoSliderSl = `${sliderAutoplayVideoContentSl} .video-slider`;
  const videoSliderWrapperSl = `${videoSliderSl} .video-slider__wrapper`;
  const videoSliderItemSl = `${videoSliderWrapperSl} .video-slider__slide.swiper-slide`;
  const videoSliderVideoBoxSl = `${videoSliderItemSl} .video-slider__video-box`;
  const videoSliderVideoSl = `${videoSliderVideoBoxSl} .video-slider__video`;
  const videoSliderInfoBoxSl = `${videoSliderItemSl} .video-slider__info-box`;
  const videoSliderInfoTitleSl = `${videoSliderInfoBoxSl} .video-slider__info-title`;
  const videoSliderInfoTextSl = `${videoSliderInfoBoxSl} .video-slider__info-text`;

  //  ${sliderAutoplayVideoSl}::before {
  //     background-image: url(https://bato-web-agency.github.io/bato-shared/img/shape-1.png);
  //  }

  //  ${sliderAutoplayVideoSl}::after {
  //     background-image: url(https://bato-web-agency.github.io/bato-shared/img/shape-2.png);
  //  }

  // ${sliderAutoplayVideoWrapperSl} .video-slider-arrows-wrapper{
  //         position: absolute;
  //         left: ${gallery?.arrow?.horizontalPosition?.desktop}%;
  //         bottom: ${gallery?.arrow?.verticalPosition?.desktop}px;
  //       }

  //       ${sliderAutoplayVideoWrapperSl} .video-slider-next{
  //         right: ${gallery?.arrow?.gap?.desktop}%;
  //         bottom: ${gallery?.arrow?.verticalPosition?.desktop}px;
  //       }

  //       ${sliderAutoplayVideoWrapperSl} .video-slider-prev{
  //         left: ${gallery?.arrow?.gap?.desktop}%;
  //         bottom: ${gallery?.arrow?.verticalPosition?.desktop}px;

  //       }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        ${getTypoCSS("", items?.info?.title?.typography)?.googleFontLink}
        ${getTypoCSS("", items?.info?.subtitle?.typography)?.googleFontLink}


		    ${
          getTypoCSS(videoSliderInfoTitleSl, items?.info?.title?.typography)
            ?.styles
        }

		    ${
          getTypoCSS(videoSliderInfoTextSl, items?.info?.subtitle?.typography)
            ?.styles
        }



        
        ${sliderAutoplayVideoWrapperSl} .video-slider-arrows-wrapper{
          position: absolute;
          left: ${gallery?.arrow?.horizontalPosition?.desktop}%;
          bottom: ${gallery?.arrow?.verticalPosition?.desktop}px;
        }

        ${sliderAutoplayVideoWrapperSl} .video-slider-next{
          position: absolute;
          right: ${gallery?.arrow?.gap?.desktop}%;
          bottom: ${gallery?.arrow?.verticalPosition?.desktop}px;
          transform: translateX(${gallery?.arrow?.gap?.desktop}px);



          width: ${gallery?.arrow?.btnSize?.desktop};
          height: ${gallery?.arrow?.btnSize?.desktop};

          border-radius: ${gallery?.arrow?.btnBorderRadius}%;
          background-color: ${gallery?.arrow?.button?.backgroundColor};
          ${getBorderCSS(gallery?.arrow?.border)}
        }

        ${sliderAutoplayVideoWrapperSl} .video-slider-prev{
          position: absolute;
          left: ${gallery?.arrow?.gap?.desktop}%;
          bottom: ${gallery?.arrow?.verticalPosition?.desktop}px;
          transform: translateX(-${gallery?.arrow?.gap?.desktop}px);


          width: ${gallery?.arrow?.btnSize?.desktop};
          height: ${gallery?.arrow?.btnSize?.desktop};

          border-radius: ${gallery?.arrow?.btnBorderRadius}%;
          background-color: ${gallery?.arrow?.button?.backgroundColor};
          ${getBorderCSS(gallery?.arrow?.border)}
          
        }


        ${sliderAutoplayVideoWrapperSl} .video-slider-prev svg {
          width: ${gallery?.arrow?.iconSize?.desktop};
          height: ${gallery?.arrow?.iconSize?.desktop};
          fill: ${gallery?.arrow?.button?.iconColor};
        }

        ${sliderAutoplayVideoWrapperSl} .video-slider-next svg {
          width: ${gallery?.arrow?.iconSize?.desktop};
          height: ${gallery?.arrow?.iconSize?.desktop};
          fill: ${gallery?.arrow?.button?.iconColor};
        }





        ${sliderAutoplayVideoContentSl}{
          max-width: ${gallery?.maxWidth?.desktop};
        }

        ${videoSliderSl}{
          height: ${gallery?.height?.desktop};
        }

        ${videoSliderItemSl}, ${videoSliderVideoBoxSl}, ${videoSliderVideoSl}{
          width: ${items?.video?.width?.desktop};
          height: ${items?.video?.height?.desktop};
        }
        

        ${videoSliderVideoBoxSl}{
          border-radius: ${getBoxCSS(items?.borderRadius?.desktop)};
          box-shadow: ${getMultiShadowCSS(items?.shadow)};
        }

        ${videoSliderVideoBoxSl}:before{
          background: linear-gradient(to top, ${
            items?.overlayColor
          }, rgba(161, 25, 152, 0));
        }


        ${videoSliderInfoTitleSl}{
          color: ${items?.info?.title?.color};
          margin: ${getBoxCSS(items?.info?.title?.margin?.desktop)};
        }

        ${videoSliderInfoTextSl}{
          color: ${items?.info?.subtitle?.color};
          margin: ${getBoxCSS(items?.info?.subtitle?.margin?.desktop)};
        }

        ${videoSliderVideoSl}{
          object-fit: ${items?.options?.objectFit};
        }

        ${sliderAutoplayVideoSl}{
          ${getBackgroundCSS(gallery?.background)}
          ${getBorderCSS(gallery?.border)}
          border-radius: ${getBoxCSS(gallery?.borderRadius?.desktop)};
          box-shadow: ${getMultiShadowCSS(gallery?.shadow)};
          margin: ${getBoxCSS(gallery?.margin?.desktop)};
          padding: ${getBoxCSS(gallery?.padding?.desktop)};
         
        }

        

        ${tabBreakpoint}{
          ${videoSliderItemSl}, ${videoSliderVideoBoxSl}, ${videoSliderVideoSl}{
            width: ${items?.video?.width?.tablet};
            height: ${items?.video?.height?.tablet};
          }

          ${videoSliderVideoBoxSl}{
            border-radius: ${getBoxCSS(items?.borderRadius?.tablet)};
          }

          ${videoSliderInfoTitleSl}{
            margin: ${getBoxCSS(items?.info?.title?.margin?.tablet)};
          }

          ${videoSliderInfoTextSl}{
            margin: ${getBoxCSS(items?.info?.subtitle?.margin?.tablet)};
          }

          ${sliderAutoplayVideoSl}{
            border-radius: ${getBoxCSS(gallery?.borderRadius?.tablet)};
            padding: ${getBoxCSS(gallery?.padding?.tablet)};
            margin: ${getBoxCSS(gallery?.margin?.tablet)};
          }

          ${videoSliderSl}{
            height: ${gallery?.height?.tablet};
          }


          ${sliderAutoplayVideoContentSl}{
            max-width: ${gallery?.maxWidth?.tablet};
          }


          ${sliderAutoplayVideoWrapperSl} .video-slider-arrows-wrapper{
            position: absolute;
            left: ${gallery?.arrow?.horizontalPosition?.tablet}%;
            bottom: ${gallery?.arrow?.verticalPosition?.tablet}px;
          }

          ${sliderAutoplayVideoWrapperSl} .video-slider-next{
            position: absolute;
            right: ${gallery?.arrow?.gap?.tablet}%;
            bottom: ${gallery?.arrow?.verticalPosition?.tablet}px;
            transform: translateX(${gallery?.arrow?.gap?.tablet}px);
          }

          ${sliderAutoplayVideoWrapperSl} .video-slider-prev{
            position: absolute;
            left: ${gallery?.arrow?.gap?.tablet}%;
            bottom: ${gallery?.arrow?.verticalPosition?.tablet}px;
            transform: translateX(-${gallery?.arrow?.gap?.tablet}px);
          }
          

          

          


        }



        ${mobileBreakpoint}{
          ${videoSliderItemSl}, ${videoSliderVideoBoxSl}, ${videoSliderVideoSl}{
            width: ${items?.video?.width?.mobile};
            height: ${items?.video?.height?.mobile};
          }

          ${videoSliderVideoBoxSl}{
            border-radius: ${getBoxCSS(items?.borderRadius?.mobile)};
          }

          ${videoSliderInfoTitleSl}{
            margin: ${getBoxCSS(items?.info?.title?.margin?.mobile)};
          }

          ${videoSliderInfoTextSl}{
            margin: ${getBoxCSS(items?.info?.subtitle?.margin?.mobile)};
          }

          ${sliderAutoplayVideoSl}{
            border-radius: ${getBoxCSS(gallery?.borderRadius?.mobile)};
            padding: ${getBoxCSS(gallery?.padding?.mobile)};
            margin: ${getBoxCSS(gallery?.margin?.mobile)};
          }

          ${videoSliderSl}{
            height: ${gallery?.height?.mobile};
          }

          ${sliderAutoplayVideoContentSl}{
            max-width: ${gallery?.maxWidth?.mobile};
          }

          ${sliderAutoplayVideoWrapperSl} .video-slider-arrows-wrapper{
            position: absolute;
            left: ${gallery?.arrow?.horizontalPosition?.mobile}%;
            bottom: ${gallery?.arrow?.verticalPosition?.mobile}px;
          }

          ${sliderAutoplayVideoWrapperSl} .video-slider-next{
            position: absolute;
            right: ${gallery?.arrow?.gap?.mobile}%;
            bottom: ${gallery?.arrow?.verticalPosition?.mobile}px;
            transform: translateX(${gallery?.arrow?.gap?.mobile}px);
          }

          ${sliderAutoplayVideoWrapperSl} .video-slider-prev{
            position: absolute;
            left: ${gallery?.arrow?.gap?.mobile}%;
            bottom: ${gallery?.arrow?.verticalPosition?.mobile}px;
            transform: translateX(-${gallery?.arrow?.gap?.mobile}px);
          }

          

         




        }



	`,
      }}
    />
  );
};
export default Style;
