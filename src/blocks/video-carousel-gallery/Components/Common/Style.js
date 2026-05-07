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
  const { styles, options } = attributes;
  const { gallery, items, lightbox } = styles;

  const mainSl = `#${id}`;
  const vcgCarouselContainerSl = `${mainSl} .vcg-carousel-container`;
  const vcgCarouselInnerSl = `${vcgCarouselContainerSl} .vcg-carousel-inner`;
  const vcgCarouselScrollWrapperSl = `${vcgCarouselInnerSl} .vcg-carousel-scroll-wrapper`;
  const vcgCarouselCardsSl = `${vcgCarouselScrollWrapperSl} .vcg-carousel-cards`;
  const vcgCarouselVideoCardSl = `${vcgCarouselCardsSl} .vcg-video-card`;
  const vcgCarouselVideoPreviewSl = `${vcgCarouselVideoCardSl} .vcg-video-preview`;
  const vcgCarouselVideoOverlaySl = `${vcgCarouselVideoPreviewSl} .vcg-video-overlay`;
  // const vcgCarouselVideoPlayButtonSl = `${vcgCarouselVideoOverlaySl} .vcg-play-button`;
  const vcgVideoCardInfoSl = `${vcgCarouselVideoCardSl} .vcg-card-info`;
  const vcgVideoCardProductDetailsSl = `${vcgVideoCardInfoSl} .vcg-product-details`;
  const vcgVideoCardProductNameSl = `${vcgVideoCardProductDetailsSl} .vcg-product-name`;
  const vcgVideoCardProductPricingSl = `${vcgVideoCardProductDetailsSl} .vcg-product-pricing`;
  const vcgVideoCardProductPriceSl = `${vcgVideoCardProductPricingSl} .vcg-original-price`;
  const vcgVideoCardProductCurrentPriceSl = `${vcgVideoCardProductPricingSl} .vcg-current-price`;

  // lightbox
  const vcgLightboxSl = `${mainSl} .vcg-lightbox`;
  const vcgLightboxCloseButtonSl = `${vcgLightboxSl} .vcg-close-button`;
  const vcgLightboxContentSl = `${vcgLightboxSl} .vcg-lightbox-content`;
  const vcgLightboxPreviewLeftSl = `${vcgLightboxContentSl} .vcg-preview-left`;
  const vcgLightboxPreviewThumbnailLeftSl = `${vcgLightboxPreviewLeftSl} .vcg-preview-thumbnail`;
  const vcgMainVideoWrapperSl = `${vcgLightboxContentSl} .vcg-main-video-wrapper`;
  // const vcgNavButtonPrevSl = `${vcgMainVideoWrapperSl} .vcg-nav-button.vcg-nav-prev`;
  // const vcgNavButtonNextSl = `${vcgMainVideoWrapperSl} .vcg-nav-button.vcg-nav-next`;
  // const vcgNavIconSl = `${vcgMainVideoWrapperSl} .vcg-nav-icon`;
  const vcgVideoContainerSl = `${vcgMainVideoWrapperSl} .vcg-video-container`;
  const vcgLightboxVideoSl = `${vcgVideoContainerSl} .vcg-lightbox-video`;
  const vcgMuteButtonSl = `${vcgVideoContainerSl} .vcg-mute-button`;
  // const vcgVolumeIconSl = `${vcgMuteButtonSl} .vcg-volume-icon`;
  const vcgProductInfoWrapperSl = `${vcgVideoContainerSl} .vcg-product-info-wrapper`;
  const vcgProductInfoCardSl = `${vcgProductInfoWrapperSl} .vcg-product-info-card`;
  // const vcgProductInfoImageSl = `${vcgProductInfoCardSl} .vcg-product-info-image`;
  const vcgProductInfoDetailsSl = `${vcgProductInfoCardSl} .vcg-product-info-details`;
  const vcgProductInfoNameSl = `${vcgProductInfoDetailsSl} .vcg-product-info-name`;
  const vcgProductInfoPricingSl = `${vcgProductInfoDetailsSl} .vcg-product-info-pricing`;
  const vcgProductInfoOriginalSl = `${vcgProductInfoPricingSl} .vcg-product-info-original`;
  const vcgProductInfoCurrentSl = `${vcgProductInfoPricingSl} .vcg-product-info-current`;
  const vcgShopButtonSl = `${vcgProductInfoCardSl} .vcg-shop-button`;
  const vcgLightboxPreviewRightSl = `${vcgLightboxContentSl} .vcg-preview-right`;
  const vcgLightboxPreviewThumbnailRightSl = `${vcgLightboxPreviewRightSl} .vcg-preview-thumbnail`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `


        ${getTypoCSS("", items?.info?.title?.typography)?.googleFontLink}
        ${
          getTypoCSS("", items?.info?.productPricing?.currentPrice?.typography)
            ?.googleFontLink
        }
        ${
          getTypoCSS("", items?.info?.productPricing?.originalPrice?.typography)
            ?.googleFontLink
        }
        ${
          getTypoCSS("", lightbox?.productInfo?.title?.typography)
            ?.googleFontLink
        }
        ${
          getTypoCSS(
            "",
            lightbox?.productInfo?.productPricing?.currentPrice?.typography
          )?.googleFontLink
        }
        ${
          getTypoCSS(
            "",
            lightbox?.productInfo?.productPricing?.originalPrice?.typography
          )?.googleFontLink
        }
        ${
          getTypoCSS("", lightbox?.productInfo?.shopButton?.typography)
            ?.googleFontLink
        }


        ${
          getTypoCSS(vcgVideoCardProductNameSl, items?.info?.title?.typography)
            ?.styles
        }
        ${
          getTypoCSS(
            vcgVideoCardProductCurrentPriceSl,
            items?.info?.productPricing?.currentPrice?.typography
          )?.styles
        }
        ${
          getTypoCSS(
            vcgVideoCardProductPriceSl,
            items?.info?.productPricing?.originalPrice?.typography
          )?.styles
        }
        ${
          getTypoCSS(
            vcgProductInfoNameSl,
            lightbox?.productInfo?.title?.typography
          )?.styles
        }
        ${
          getTypoCSS(
            vcgProductInfoCurrentSl,
            lightbox?.productInfo?.productPricing?.currentPrice?.typography
          )?.styles
        }
        ${
          getTypoCSS(
            vcgProductInfoOriginalSl,
            lightbox?.productInfo?.productPricing?.originalPrice?.typography
          )?.styles
        }

        ${
          getTypoCSS(
            vcgShopButtonSl,
            lightbox?.productInfo?.shopButton?.typography
          )?.styles
        }


        ${vcgVideoCardProductPriceSl} svg{
        width: ${
          items?.info?.productPricing?.originalPrice?.currencySize?.desktop
        };
          height: ${
            items?.info?.productPricing?.originalPrice?.currencySize?.desktop
          };
          fill: ${items?.info?.productPricing?.originalPrice?.color};
        }

        ${vcgVideoCardProductCurrentPriceSl} svg{
          width: ${
            items?.info?.productPricing?.currentPrice?.currencySize?.desktop
          };
          height: ${
            items?.info?.productPricing?.currentPrice?.currencySize?.desktop
          };
          fill: ${items?.info?.productPricing?.currentPrice?.color};
        }


        ${vcgProductInfoOriginalSl} svg{
          width: ${
            lightbox?.productInfo?.productPricing?.originalPrice?.currencySize
              ?.desktop
          };
          height: ${
            lightbox?.productInfo?.productPricing?.originalPrice?.currencySize
              ?.desktop
          };
          fill: ${lightbox?.productInfo?.productPricing?.orginalPrice?.color};
        }


        ${vcgProductInfoCurrentSl} svg{
          width: ${
            lightbox?.productInfo?.productPricing?.currentPrice?.currencySize
              ?.desktop
          };
          height: ${
            lightbox?.productInfo?.productPricing?.currentPrice?.currencySize
              ?.desktop
          };
          fill: ${lightbox?.productInfo?.productPricing?.currentPrice?.color};
        }


        ${vcgLightboxCloseButtonSl}{
          width: ${lightbox?.closeButton?.size};
          height: ${lightbox?.closeButton?.size};
          background-color: ${lightbox?.closeButton?.backgroundColor};
          border-radius: ${getBoxCSS(
            lightbox?.closeButton?.borderRadius?.desktop
          )};
        }

        ${vcgLightboxCloseButtonSl} svg{
          width: ${lightbox?.closeButton?.iconSize};
          height: ${lightbox?.closeButton?.iconSize};
          color: ${lightbox?.closeButton?.iconColor};
        }

        ${vcgLightboxCloseButtonSl}:hover{
          background-color: ${lightbox?.closeButton?.hoverBackgroundColor};
        }
          

        ${vcgShopButtonSl}{
          background-color: ${
            lightbox?.productInfo?.shopButton?.backgroundColor
          };
          color: ${lightbox?.productInfo?.shopButton?.textColor};
          padding: ${getBoxCSS(
            lightbox?.productInfo?.shopButton?.padding?.desktop
          )};
          border-radius: ${getBoxCSS(
            lightbox?.productInfo?.shopButton?.borderRadius?.desktop
          )};
        }


        ${vcgProductInfoPricingSl}{
          gap: ${lightbox?.productInfo?.productPricing?.gap?.desktop};
        }


        ${vcgProductInfoOriginalSl}{
          color: ${lightbox?.productInfo?.productPricing?.originalPrice?.color};
        }

        ${vcgProductInfoCurrentSl}{
          color: ${lightbox?.productInfo?.productPricing?.currentPrice?.color};
        }

        ${vcgProductInfoNameSl}{
          color: ${lightbox?.productInfo?.title?.color};
          margin: ${getBoxCSS(lightbox?.productInfo?.title?.margin?.desktop)};
        }


        ${vcgProductInfoWrapperSl}{
          ${getBackgroundCSS(lightbox?.infoWrapper?.background)}
          padding: ${getBoxCSS(lightbox?.infoWrapper?.padding?.desktop)};
        }


        ${vcgProductInfoCardSl} img{
          width: ${lightbox?.productInfo?.productImage?.size};
          height: ${lightbox?.productInfo?.productImage?.size};
          border-radius: ${getBoxCSS(
            lightbox?.productInfo?.productImage?.borderRadius?.desktop
          )};
        }


        ${vcgProductInfoCardSl}{
          ${getBackgroundCSS(lightbox?.productInfo?.background)}
          backdrop-filter: blur(${lightbox?.productInfo?.blur}px);
          border-radius: ${getBoxCSS(
            lightbox?.productInfo?.borderRadius?.desktop
          )};
          padding: ${getBoxCSS(lightbox?.productInfo?.padding?.desktop)};
          gap: ${lightbox?.productInfo?.gap?.desktop};
        }

        ${vcgMuteButtonSl} svg, ${vcgMainVideoWrapperSl} .vcg-nav-button svg{
          color: ${lightbox?.buttons?.iconColor};
          width: ${lightbox?.buttons?.iconSize};
          height: ${lightbox?.buttons?.iconSize};
        }

        ${vcgMuteButtonSl}, ${vcgMainVideoWrapperSl} .vcg-nav-button{
          width: ${lightbox?.buttons?.size};
          height: ${lightbox?.buttons?.size};
          background-color: ${lightbox?.buttons?.bgColor};
          backdrop-filter: blur(${lightbox?.buttons?.blur}px);
          border-radius: ${getBoxCSS(lightbox?.buttons?.borderRadius?.desktop)};
        }


        ${vcgLightboxContentSl}{
          gap: ${lightbox?.gap?.desktop};
        }

        ${vcgMainVideoWrapperSl}{
          max-width: ${lightbox?.centerMaxWidth?.desktop};
        }


        ${vcgVideoContainerSl}, ${vcgLightboxPreviewRightSl}, ${vcgLightboxPreviewLeftSl}{
          height: ${lightbox?.height?.desktop};
        }

        ${vcgLightboxPreviewRightSl}, ${vcgLightboxPreviewLeftSl}{
          width: ${lightbox?.sideWidth?.desktop};
        }

        ${vcgVideoContainerSl}, ${vcgLightboxPreviewThumbnailRightSl}, ${vcgLightboxPreviewThumbnailLeftSl} {
          border-radius: ${getBoxCSS(lightbox?.borderRadius?.desktop)}; 
          height: ${lightbox?.height?.desktop};
        }

        ${vcgLightboxSl}{
          ${getBackgroundCSS(lightbox?.background)}
        }

        ${vcgCarouselContainerSl}{
          ${getBackgroundCSS(gallery?.background)}
          ${getBorderCSS(gallery?.border)}
          border-radius: ${getBoxCSS(gallery?.borderRadius?.desktop)};
          box-shadow: ${getMultiShadowCSS(gallery?.shadow)};
          margin: ${getBoxCSS(gallery?.margin?.desktop)};
          padding: ${getBoxCSS(gallery?.padding?.desktop)};
        }

        ${vcgCarouselInnerSl}{
          max-width: ${gallery?.container?.maxWidth}px;
        }

        ${vcgCarouselCardsSl}{
          gap: ${items?.gap?.desktop};
          padding: ${getBoxCSS(items?.padding?.desktop)};
        }

        ${vcgCarouselVideoCardSl}{
          width: ${items?.width?.desktop};
        }

        ${vcgVideoCardProductNameSl}{
          color: ${items?.info?.title?.color};
          margin: ${getBoxCSS(items?.info?.title?.margin?.desktop)};
        }

        ${vcgVideoCardProductPricingSl}{
          gap: ${items?.info?.productPricing?.gap?.desktop};
        }

        ${vcgVideoCardProductCurrentPriceSl}{
          color: ${items?.info?.productPricing?.currentPrice?.color};
          margin: ${getBoxCSS(
            items?.info?.productPricing?.currentPrice?.margin?.desktop
          )};
        }

        ${vcgVideoCardProductPriceSl}{
          margin: ${getBoxCSS(
            items?.info?.productPricing?.originalPrice?.margin?.desktop
          )};
          color: ${items?.info?.productPricing?.originalPrice?.color};
        }

        ${vcgVideoCardInfoSl}{
          padding: ${getBoxCSS(items?.info?.padding?.desktop)};
          gap: ${items?.info?.gap?.desktop};
          border-radius: ${getBoxCSS(items?.info?.borderRadius?.desktop)};
        }

        ${vcgVideoCardInfoSl} img{
          width: ${items?.info?.productImage?.size};
          height: ${items?.info?.productImage?.size};
          border-radius: ${getBoxCSS(
            items?.info?.productImage?.borderRadius?.desktop
          )};
        }

        ${vcgCarouselVideoOverlaySl}{
          background-color: ${items?.preview?.overlayColor};
        }

        ${vcgCarouselVideoPreviewSl}{
          border-radius: ${getBoxCSS(items?.preview?.borderRadius?.desktop)};
          margin: ${getBoxCSS(items?.preview?.margin?.desktop)};
        }

        ${vcgLightboxVideoSl},${vcgCarouselVideoPreviewSl} video{
          object-fit: ${options?.objectFit};
        }

        ${vcgLightboxPreviewThumbnailRightSl} img,${vcgLightboxPreviewThumbnailLeftSl} img{
          object-fit: ${options?.objectFit};
        }
          






        ${tabBreakpoint}{
          ${vcgLightboxCloseButtonSl}{
            border-radius: ${getBoxCSS(
              lightbox?.closeButton?.borderRadius?.tablet
            )};
          }   

          ${vcgShopButtonSl}{
            padding: ${getBoxCSS(
              lightbox?.productInfo?.shopButton?.padding?.tablet
            )};
            border-radius: ${getBoxCSS(
              lightbox?.productInfo?.shopButton?.borderRadius?.tablet
            )};
          }

          ${vcgProductInfoPricingSl}{
            gap: ${lightbox?.productInfo?.productPricing?.gap?.tablet};
          }

          ${vcgProductInfoNameSl}{
            margin: ${getBoxCSS(lightbox?.productInfo?.title?.margin?.tablet)};
          }


          ${vcgProductInfoWrapperSl}{
            padding: ${getBoxCSS(lightbox?.infoWrapper?.padding?.tablet)};
          }


          ${vcgProductInfoCardSl} img{
            border-radius: ${getBoxCSS(
              lightbox?.productInfo?.productImage?.borderRadius?.tablet
            )};
          }


          ${vcgProductInfoCardSl}{
            border-radius: ${getBoxCSS(
              lightbox?.productInfo?.borderRadius?.tablet
            )};
            padding: ${getBoxCSS(lightbox?.productInfo?.padding?.tablet)};
            gap: ${lightbox?.productInfo?.gap?.tablet};
          }

          ${vcgMuteButtonSl}, ${vcgMainVideoWrapperSl} .vcg-nav-button{
            border-radius: ${getBoxCSS(
              lightbox?.buttons?.borderRadius?.tablet
            )};
          }

          ${vcgLightboxContentSl}{
            gap: ${lightbox?.gap?.tablet};
          }

          ${vcgMainVideoWrapperSl}{
            max-width: ${lightbox?.centerMaxWidth?.tablet};
          }


          ${vcgVideoContainerSl}, ${vcgLightboxPreviewRightSl}, ${vcgLightboxPreviewLeftSl}{
            height: ${lightbox?.height?.tablet};
          }

          ${vcgLightboxPreviewRightSl}, ${vcgLightboxPreviewLeftSl}{
            width: ${lightbox?.sideWidth?.tablet};
          }

          ${vcgVideoContainerSl}, ${vcgLightboxPreviewThumbnailRightSl}, ${vcgLightboxPreviewThumbnailLeftSl} {
            border-radius: ${getBoxCSS(lightbox?.borderRadius?.tablet)}; 
            height: ${lightbox?.height?.tablet};
          }

          ${vcgCarouselContainerSl}{
            border-radius: ${getBoxCSS(gallery?.borderRadius?.tablet)};
            margin: ${getBoxCSS(gallery?.margin?.tablet)};
            padding: ${getBoxCSS(gallery?.padding?.tablet)};
          }

          ${vcgCarouselCardsSl}{
            gap: ${items?.gap?.tablet};
            padding: ${getBoxCSS(items?.padding?.tablet)};
          }

          ${vcgCarouselVideoCardSl}{
            width: ${items?.width?.tablet};
          }

          ${vcgVideoCardProductNameSl}{
            margin: ${getBoxCSS(items?.info?.title?.margin?.tablet)};
          }

          ${vcgVideoCardProductPricingSl}{
            gap: ${items?.info?.productPricing?.gap?.tablet};
          }

          ${vcgVideoCardProductCurrentPriceSl}{
            margin: ${getBoxCSS(
              items?.info?.productPricing?.currentPrice?.margin?.tablet
            )};
          }

          ${vcgVideoCardProductPriceSl}{
            margin: ${getBoxCSS(
              items?.info?.productPricing?.originalPrice?.margin?.tablet
            )};
          }

          ${vcgVideoCardInfoSl}{
            padding: ${getBoxCSS(items?.info?.padding?.tablet)};
            gap: ${items?.info?.gap?.tablet};
            border-radius: ${getBoxCSS(items?.info?.borderRadius?.tablet)};
          }

          ${vcgVideoCardInfoSl} img{
            border-radius: ${getBoxCSS(
              items?.info?.productImage?.borderRadius?.tablet
            )};
          }

          ${vcgCarouselVideoPreviewSl}{
            border-radius: ${getBoxCSS(items?.preview?.borderRadius?.tablet)};
            margin: ${getBoxCSS(items?.preview?.margin?.tablet)};
          }
        }



        ${mobileBreakpoint}{
          ${vcgLightboxCloseButtonSl}{
            border-radius: ${getBoxCSS(
              lightbox?.closeButton?.borderRadius?.mobile
            )};
          }   

          ${vcgShopButtonSl}{
            padding: ${getBoxCSS(
              lightbox?.productInfo?.shopButton?.padding?.mobile
            )};
            border-radius: ${getBoxCSS(
              lightbox?.productInfo?.shopButton?.borderRadius?.mobile
            )};
          }

          ${vcgProductInfoPricingSl}{
            gap: ${lightbox?.productInfo?.productPricing?.gap?.mobile};
          }

          ${vcgProductInfoNameSl}{
            margin: ${getBoxCSS(lightbox?.productInfo?.title?.margin?.mobile)};
          }


          ${vcgProductInfoWrapperSl}{
            padding: ${getBoxCSS(lightbox?.infoWrapper?.padding?.mobile)};
          }


          ${vcgProductInfoCardSl} img{
            border-radius: ${getBoxCSS(
              lightbox?.productInfo?.productImage?.borderRadius?.mobile
            )};
          }


          ${vcgProductInfoCardSl}{
            border-radius: ${getBoxCSS(
              lightbox?.productInfo?.borderRadius?.mobile
            )};
            padding: ${getBoxCSS(lightbox?.productInfo?.padding?.mobile)};
            gap: ${lightbox?.productInfo?.gap?.mobile};
          }

          ${vcgMuteButtonSl}, ${vcgMainVideoWrapperSl} .vcg-nav-button{
            border-radius: ${getBoxCSS(
              lightbox?.buttons?.borderRadius?.mobile
            )};
          }

          ${vcgLightboxContentSl}{
            gap: ${lightbox?.gap?.mobile};
          }

          ${vcgMainVideoWrapperSl}{
            max-width: ${lightbox?.centerMaxWidth?.mobile};
          }


          ${vcgVideoContainerSl}, ${vcgLightboxPreviewRightSl}, ${vcgLightboxPreviewLeftSl}{
            height: ${lightbox?.height?.mobile};
          }

          ${vcgLightboxPreviewRightSl}, ${vcgLightboxPreviewLeftSl}{
            width: ${lightbox?.sideWidth?.mobile};
          }

          ${vcgVideoContainerSl}, ${vcgLightboxPreviewThumbnailRightSl}, ${vcgLightboxPreviewThumbnailLeftSl} {
            border-radius: ${getBoxCSS(lightbox?.borderRadius?.mobile)}; 
            height: ${lightbox?.height?.mobile};
          }

          ${vcgCarouselContainerSl}{
            border-radius: ${getBoxCSS(gallery?.borderRadius?.mobile)};
            margin: ${getBoxCSS(gallery?.margin?.mobile)};
            padding: ${getBoxCSS(gallery?.padding?.mobile)};
          }

          ${vcgCarouselCardsSl}{
            gap: ${items?.gap?.mobile};
            padding: ${getBoxCSS(items?.padding?.mobile)};
          }

          ${vcgCarouselVideoCardSl}{
            width: ${items?.width?.mobile};
          }

          ${vcgVideoCardProductNameSl}{
            margin: ${getBoxCSS(items?.info?.title?.margin?.mobile)};
          }

          ${vcgVideoCardProductPricingSl}{
            gap: ${items?.info?.productPricing?.gap?.mobile};
          }

          ${vcgVideoCardProductCurrentPriceSl}{
            margin: ${getBoxCSS(
              items?.info?.productPricing?.currentPrice?.margin?.mobile
            )};
          }

          ${vcgVideoCardProductPriceSl}{
            margin: ${getBoxCSS(
              items?.info?.productPricing?.originalPrice?.margin?.mobile
            )};
          }

          ${vcgVideoCardInfoSl}{
            padding: ${getBoxCSS(items?.info?.padding?.mobile)};
            gap: ${items?.info?.gap?.mobile};
            border-radius: ${getBoxCSS(items?.info?.borderRadius?.mobile)};
          }

          ${vcgVideoCardInfoSl} img{
            border-radius: ${getBoxCSS(
              items?.info?.productImage?.borderRadius?.mobile
            )};
          }

          ${vcgCarouselVideoPreviewSl}{
            border-radius: ${getBoxCSS(items?.preview?.borderRadius?.mobile)};
            margin: ${getBoxCSS(items?.preview?.margin?.mobile)};
          }
        }



		

	`,
      }}
    />
  );
};
export default Style;
