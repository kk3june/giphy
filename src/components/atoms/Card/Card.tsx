import React from 'react';

import { StyledCard, StyledImg } from './Card.styled';

const Card = ({ data, width, height, cardType }: any) => {
  return (
    <StyledCard key={data.id || data?.[0]?.id}>
      <a href={`gifs/${data.id || data?.[0]?.id}`}>
        <StyledImg src={data.images.original.url || data?.[0]?.images.original.url} width={width} height={height} />
      </a>
    </StyledCard>
  );
};

export default Card;
