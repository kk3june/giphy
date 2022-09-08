import React from 'react';

import { StyledCardWrapper, StyledCard, StyledImg } from './Card.styled';

const Card = ({ data, width, height, name }: any) => {
  return (
    <StyledCardWrapper>
      {data &&
        data.map((el: any) => (
          <StyledCard width={width} height={height}>
            <a href={`gifs/${el.id}`}>
              <StyledImg src={el.images.original.url} name={name} />
            </a>
          </StyledCard>
        ))}
    </StyledCardWrapper>
  );
};

export default Card;
