import React from 'react';

import { VAC } from 'react-vac';

import CardList from '../components/modules/CardList/CardList';

const CardListLayer = ({ data, width, height }: any) => {
  const cardProps = {
    data,
    width,
    height,
  };
  return (
    <>
      <CardList {...cardProps} />
      {/* <VAC name="CardList" data={cardProps} /> */}
    </>
  );
};

export default CardListLayer;
