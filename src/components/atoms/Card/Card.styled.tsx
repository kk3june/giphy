import styled from '@emotion/styled';

import { ARTISTS, GIFS } from 'src/constants';

type StyledCardProps = {
  width?: string | undefined;
  height?: string | undefined;
  type?: string | undefined;
};

const WIDTH_TYPE = {
  TRENDING: '',
  ARTISTS: '21.4375rem',
  RELATED_CLIPS: '15.5rem',
  RELATED_GIFS: '15.5rem',
  GIF: '31.25rem',
};
const HEIGHT_TYPE = {
  TRENDING: '8.75rem',
  ARTISTS: '16.8125rem',
  RELATED_CLIPS: '8.71875rem',
  RELATED_GIFS: 'auto',
};

export const StyledCard = styled.div<StyledCardProps>`
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
  height: ${({ type }) => HEIGHT_TYPE[type as keyof typeof HEIGHT_TYPE]};
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
