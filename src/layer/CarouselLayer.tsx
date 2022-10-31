/* eslint-disable react/require-default-props */
import React from 'react';

// import { VAC } from 'react-vac';

import Carousel from 'components/modules/Carousel/Carousel';

interface CarouselLayerProps {
  type: string | undefined;
  data: any;
  isLoading: boolean;
  childWidth?: number;
  childHeight?: number;
}

const CarouselLayer = ({ type, data, isLoading, childWidth, childHeight }: CarouselLayerProps) => {
  const carouselType = {
    type,
    data,
    isLoading,
    childWidth,
    childHeight,
  };

  return (
    <>
      <Carousel {...carouselType} />
      {/* <VAC name="Carousel" data={carouselType} /> */}
    </>
  );
};

export default CarouselLayer;
