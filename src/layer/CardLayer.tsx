import React from 'react';

import { VAC } from 'react-vac';

import CardList from '../components/modules/CardList/CardList';

const CardLayer = ({ data, cardType }: any) => {
  const cardProps = {
    data,
    cardType,
  };
  return (
    <>
      <CardList {...cardProps} />
      {/* <VAC name="Card" data={cardProps} /> */}
    </>
  );
};

export default CardLayer;
