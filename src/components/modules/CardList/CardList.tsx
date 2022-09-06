import { css } from '@emotion/react';

import { StyledCard, StyledImg } from './CardList.styled';

const CardList = ({ data, cardType }: any) => {
  return (
    <div
        css={css`
          display: flex;
          width: 100%;
          overflow: hidden;
        `}
      >
        {data &&
          data.map((el: any) => (
            <StyledCard key={el.id}>
              <a href={`gifs/${el.id}`}>
                <StyledImg src={el.images.original.url} cardType={cardType} />
              </a>
            </StyledCard>
          ))}
      </div>
  );
};

export default CardList;
