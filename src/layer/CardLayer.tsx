import React from 'react';

import { VAC } from 'react-vac';

import Card from 'components/atoms/Card/Card';

const CardLayer = ({ data, width, height, cardType }: any) => {
  console.log(data);
  const cardProps = {
    data,
    width,
    height,
    cardType,
  };
  return (
    <>
      <Card {...cardProps} />
      {/* <VAC name='Card' data={cardProps} /> */}
    </>
  );
};

export default CardLayer;
