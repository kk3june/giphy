import React from 'react';

import { GIF } from 'src/constants';

import { StyledCard, StyledImg } from './Card.styled';

const Card = ({ data, width, height, type }: any) => {
  const WIDTH_TYPE = {
    TRENDING: '',
    ARTISTS: '21.4375rem',
  };
  const HEIGHT_TYPE = {
    TRENDING: '8.75rem',
    ARTISTS: '16.8125rem',
  };
  return (
    <StyledCard
      width={WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]}
      height={HEIGHT_TYPE[type as keyof typeof HEIGHT_TYPE]}
    >
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
