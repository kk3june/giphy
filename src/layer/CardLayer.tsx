import React from 'react';
import Card from '../components/atoms/Card/Card';
import { VAC } from 'react-vac';

const CardLayer = ({ data }: any) => {
  const cardProps = {
    data,
  };
  return (
    <>
      <Card {...cardProps} />
      {/* <VAC name="Card" data={cardProps} /> */}
    </>
  );
};

export default CardLayer;
