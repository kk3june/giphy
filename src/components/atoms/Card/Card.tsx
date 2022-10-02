import React from 'react';

import { GIF, LOGIN_PAGE } from 'src/constants';

import { StyledCard, StyledImg } from './Card.styled';

const Card = ({ data, type, isLoading }: any) => {
  return isLoading ? (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  ) : (
    <StyledCard type={type}>
      {type === GIF && data?.source_post_url && (
        <a href={data?.source_post_url}>
          <StyledImg src={data?.images?.original.url} type={type} />
        </a>
      )}
      {type === GIF && !data?.source_post_url && <StyledImg src={data?.images?.original.url} type={type} />}
      {type !== GIF && type !== LOGIN_PAGE && (
        <a href={`/gifs/${data?.id}`}>
          <StyledImg src={data?.images?.original.url} type={type} />
        </a>
      )}
      {type === LOGIN_PAGE && <StyledImg src={data?.images?.original.url} type={type} />}
    </StyledCard>
  );
};

export default Card;
