import styled from '@emotion/styled';

import { DETAIL, NORMAL } from 'src/constants';

export const GridItem = styled.a<{ type?: string }>`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const ClipVideo = styled.video<{ type?: string }>`
  width: ${({ type }) => (type === DETAIL ? '48.5rem' : '')};
  width: ${({ type }) => (type === NORMAL ? '14.5rem' : '')};
`;

export const Title = styled.div<{ type?: string }>`
  width: 100%;
  margin: 0.3125rem 0;
  padding: ${({ type }) => (type === DETAIL ? '0.625rem 0' : '')};
  font-size: ${({ type }) => (type === DETAIL ? '1.5rem' : '1.0625rem')};
  font-weight: bold;
  text-decoration: none;
  text-overflow: ellipsis;
  color: white;
`;
