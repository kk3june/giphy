import React from 'react';
import Card from '../components/atoms/Card/Card';
import { VAC } from 'react-vac';

const CardLayer = ({ data, cardType }: any) => {
  const cardProps = {
    data,
    cardType,
  };
  return (
    <>
      <Card {...cardProps} />
      {/* <VAC name="Card" data={cardProps} /> */}
    </>
  );
};

export default CardLayer;
