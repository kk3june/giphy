import styled from '@emotion/styled';

import { DETAIL, NORMAL } from 'src/constants';

export const GridItem = styled.div<{ type?: string }>`
  width: 100%;
  margin-bottom: 0.5rem;
`;

const WIDTH_TYPE = {
  DETAIL: '48.5rem',
  NORMAL: '14.5rem',
};

export const ClipAnchor = styled.a`
  display: inline-block;
  width: 100%;
  text-decoration: none;
`;
export const ClipVideo = styled.video<{ type: any }>`
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
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
