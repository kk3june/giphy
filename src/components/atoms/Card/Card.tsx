import React from 'react';

import { StyledCardWrapper, StyledCard, StyledImg } from './Card.styled';

const Card = ({ data, width, height, type }: any) => {
  return (
    <StyledCardWrapper type={type}>
      {data &&
        data.map((item: any) => (
          <StyledCard key={item.id} width={width} height={height}>
            <a href={`gifs/${item.id}`}>
              <StyledImg src={item.images.original.url} type={type} />
            </a>
          </StyledCard>
        ))}
    </StyledCardWrapper>
  );
};

export default Card;
