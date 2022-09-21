import React from 'react';

import { VAC } from 'react-vac';

import Carousel from 'components/modules/Carousel/Carousel';

const CarouselLayer = ({ type, data, width, height }: any) => {
  const carouselType = {
    type,
    data,
    width,
    height,
    clickArrowSvg: () => {
      console.log('test');
    },
  };

  return (
    <>
      <Carousel {...carouselType} />
      {/* <VAC name="Carousel" data={carouselType} /> */}
    </>
  );
};

export default CarouselLayer;
