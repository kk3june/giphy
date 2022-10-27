import React from 'react';

// import { VAC } from 'react-vac';

import Card from 'components/atoms/Card/Card';

const CardLayer = ({ data, name, type, isLoading, childWidth, childHeight }: any) => {
  const originWidth = data?.images?.original.width;
  const originHeight = data?.images?.original.height;
  const dynamicWidth = Math.floor((originWidth / originHeight) * childHeight);
  const dynamicHeight = Math.floor((originHeight / originWidth) * childWidth);

  const cardProps = {
    data,
    name,
    type,
    isLoading,
    childWidth,
    childHeight,
    dynamicWidth,
    dynamicHeight,
  };
  return (
    <>
      <Card {...cardProps} />
      {/* <VAC name="Card" data={cardProps} /> */}
    </>
  );
};

export default CardLayer;
