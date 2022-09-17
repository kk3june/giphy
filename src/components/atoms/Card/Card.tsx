import React from 'react';

import { GIF } from 'src/constants';

import { StyledCardWrapper, StyledCard, StyledImg } from './Card.styled';

const Card = ({ data, width, height, type }: any) => {
  return (
    <StyledCardWrapper type={type}>
      {data &&
        data.map((item: any) => (
          <StyledCard key={item.id} width={width} height={height}>
            {type === GIF && item.source_post_url && (
              <a href={item.source_post_url}>
                <StyledImg src={item.images.original.url} type={type} />
              </a>
            )}
            {type === GIF && !item.source_post_url && <StyledImg src={item.images.original.url} type={type} />}
            {type !== GIF && (
              <a href={`/gifs/${item.id}`}>
                <StyledImg src={item.images.original.url} type={type} />
              </a>
            )}
          </StyledCard>
        ))}
    </StyledCardWrapper>
  );
};

export default Card;
