import styled from '@emotion/styled';

import { ARTISTS, CLIPS, GIFS } from 'src/constants';

type StyledCardProps = {
  width?: string | undefined;
  height?: string | undefined;
  type?: string | undefined;
};

export const StyledCardWrapper = styled.div<StyledCardProps>`
  display: flex;
  justify-content: ${({ type }) => (type !== ARTISTS ? 'space-between' : '')};
  flex-wrap: ${({ type }) => (type === GIFS ? 'wrap' : '')};
  width: 100%;
  height: ${({ type }) => (type === GIFS ? '62.5rem' : '')};

  overflow: hidden;
`;

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
  width: ${({ type }) => (type === ARTISTS ? '21.4375rem' : '')};
  width: ${({ type }) => (type === GIFS ? '15.5rem' : '')};
  width: ${({ type }) => (type === CLIPS ? '15.5rem' : '')};
  object-fit: cover;
`;
