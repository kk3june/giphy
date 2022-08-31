import { css } from '@emotion/react';
import { StyledCard, StyledImg } from './Card.styled';

const Card = ({ data }: any) => {
  return (
    <>
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
              <a href={el.id}>
                <StyledImg src={el.images.original.url} />
              </a>
            </StyledCard>
          ))}
      </div>
    </>
  );
};

export default Card;
