import React from 'react';

import { StyledCardWrapper, StyledCard, StyledImg } from './Card.styled';

const Card = ({ data, width, height, type }: any) => {
  return (
    <StyledCardWrapper type={type}>
      {data &&
        data.map((el: any) => (
          <StyledCard key={el.id} width={width} height={height}>
            <a href={`gifs/${el.id}`}>
              <StyledImg src={el.images.original.url} type={type} />
            </a>
          </StyledCard>
        ))}
    </StyledCardWrapper>
  );
};

export default Card;
