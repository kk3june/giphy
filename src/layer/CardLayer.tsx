import React from 'react';

import { VAC } from 'react-vac';

import Card from 'components/atoms/Card/Card';

const CardLayer = ({ data, name, type }: any) => {
  const cardProps = {
    data,
    name,
    type,
  };
  return (
    <>
      <Card {...cardProps} />
      {/* <VAC name="Card" data={cardProps} /> */}
    </>
  );
};

export default CardLayer;
