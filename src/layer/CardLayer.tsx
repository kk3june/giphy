import React from 'react';

// import { VAC } from 'react-vac';

import Card from 'components/atoms/Card/Card';

const CardLayer = ({ data, name, type, isLoading }: any) => {
  const cardProps = {
    data,
    name,
    type,
    isLoading,
  };
  return (
    <>
      <Card {...cardProps} />
      {/* <VAC name="Card" data={cardProps} /> */}
    </>
  );
};

export default CardLayer;
