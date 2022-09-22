import styled from '@emotion/styled';

import { ARTISTS, GIFS } from 'src/constants';

type StyledCardProps = {
  width?: string | undefined;
  height?: string | undefined;
  type?: string | undefined;
};

const WIDTH_TYPE = {
  ARTISTS: '21.4375rem',
  GIFS: '15.5rem',
  CLIPS: '15.5rem',
};

// export const StyledCardWrapper = styled.div<StyledCardProps>`
//   display: flex;
//   justify-content: ${({ type }) => (type !== ARTISTS ? 'space-between' : '')};
//   flex-wrap: ${({ type }) => (type === GIFS ? 'wrap' : '')};
//   width: 100%;
//   height: ${({ type }) => (type === GIFS ? '62.5rem' : '')};
//   overflow: hidden;
// `;

export const StyledCard = styled.div<StyledCardProps>`
  width: ${({ type }) => (type === GIFS ? '15.5rem' : '')};
  height: ${({ height }) => height};
  margin-bottom: 0.625rem;
`;

export const StyledImg = styled.img<StyledCardProps>`
  display: inline-block;
  margin: 0 0.125rem;
  border-radius: 0.3125rem;
  height: 100%;
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
  object-fit: cover;
`;
