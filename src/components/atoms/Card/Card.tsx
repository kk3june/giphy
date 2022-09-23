import React from 'react';

import { GIF } from 'src/constants';

import { StyledCard, StyledImg } from './Card.styled';

const Card = ({ data, type }: any) => {
  return (
    <StyledCard type={type}>
      {type === GIF && data?.source_post_url && (
        <a href={data?.source_post_url}>
          <StyledImg src={data?.images?.original.url} type={type} />
        </a>
      )}
      {type === GIF && !data?.source_post_url && <StyledImg src={data?.images?.original.url} type={type} />}
      {type !== GIF && (
        <a href={`/gifs/${data?.id}`}>
          <StyledImg src={data?.images?.original.url} type={type} />
        </a>
      )}
    </StyledCard>
  );
};

export default Card;
