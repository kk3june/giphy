import React from 'react';

// import { VAC } from 'react-vac';

import Carousel from 'components/modules/Carousel/Carousel';

const CarouselLayer = ({ type, data, isLoading }: any) => {
  const carouselType = {
    type,
    data,
    isLoading,
  };

  return (
    <>
      <Carousel {...carouselType} />
      {/* <VAC name="Carousel" data={carouselType} /> */}
    </>
  );
};

export default CarouselLayer;
