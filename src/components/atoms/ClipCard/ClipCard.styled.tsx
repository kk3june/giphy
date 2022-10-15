import styled from '@emotion/styled';

import { DETAIL, UPNEXT } from 'src/constants';

const WIDTH_TYPE = {
  DETAIL: '48.5rem',
  UPNEXT: '14.5rem',
};

export const GridItem = styled.div<{ type?: string }>`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
  &:hover {
    .clips_hover > * {
      visibility: visible;
    }
  }
`;

export const ClipAnchor = styled.a`
  display: inline-block;
  width: 100%;
  text-decoration: none;
`;

export const ClipVideo = styled.video<{ type: any }>`
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
  height: ${({ type }) => (type === UPNEXT ? '8.125rem' : '')};
  border-radius: 5px;
  object-fit: cover;
  object-position: top;
`;

export const Title = styled.div<{ type?: string }>`
  margin: 0.3125rem 0;
  padding: ${({ type }) => (type === DETAIL ? '0.625rem 0' : '')};
  font-size: ${({ type }) => (type === DETAIL ? '1.5rem' : '1.0625rem')};
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: white;
`;

export const ClipsHoverSvg = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0.8rem;
  right: 1rem;
  width: 3.5rem;
  visibility: hidden;
`;
