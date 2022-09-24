import styled from '@emotion/styled';

const SwiperStyle = `
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-container-multirow-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-container-pointer-events {
    touch-action: pan-y;
  }
  .swiper-container-pointer-events.swiper-container-vertical {
    touch-action: pan-x;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }
  /* Auto Height */
  .swiper-container-autoheight,
  .swiper-container-autoheight .swiper-slide {
    height: auto;
  }
  .swiper-container-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform, height;
  }
  
  /* CSS Mode */
  .swiper-container-css-mode > .swiper-wrapper {
    overflow: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
  }
  .swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
  }
  .swiper-container-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
  }
  .swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {
    scroll-snap-type: x mandatory;
  }
  .swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {
    scroll-snap-type: y mandatory;
  }
  :root {
    --swiper-navigation-size: 44px;
    /*
  --swiper-navigation-color: var(--swiper-theme-color);
  */
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 10px;
    right: auto;
  }
  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    content: 'prev';
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
  }
  .swiper-button-next:after,
  .swiper-container-rtl .swiper-button-prev:after {
    content: 'next';
  }
  .swiper-button-prev.swiper-button-white,
  .swiper-button-next.swiper-button-white {
    --swiper-navigation-color: #ffffff;
  }
  .swiper-button-prev.swiper-button-black,
  .swiper-button-next.swiper-button-black {
    --swiper-navigation-color: #000000;
  }
  .swiper-button-lock {
    display: none;
  }
  :root {
    /*
  --swiper-pagination-color: var(--swiper-theme-color);
  */
  }
`;

export const StyledWrapper = styled.div`
  ${SwiperStyle}

  .swiper-wrapper {
    .swiper-slide {
      width: auto !important;
    }
  }
`;

export default StyledWrapper;
