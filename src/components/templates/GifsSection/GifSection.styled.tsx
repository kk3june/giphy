import styled from '@emotion/styled';

import { DETAIL } from 'src/constants';

export const StyledSection = styled.div<{ type: string }>`
  width: 100%;
  display: flex;

  justify-content: space-between;
`;

export const GifTitle = styled.span`
  display: inline-block;
  color: #a6a6a6;
  font-size: 1rem;
  margin-bottom: 0.8rem;
`;

export const GifButton = styled.span<{ type: string }>`
  display: flex;
  margin: ${({ type }) => (type !== DETAIL ? '1.25rem' : '0 0.625rem')};
  align-items: center;
`;

export const GifButtonName = styled.span`
  display: inline-block;
  margin-left: 1.25rem;
  font-size: 1.1rem;
`;
export const GifButtonWrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: ${({ type }) => (type !== DETAIL ? 'column' : 'row')};
  padding: ${({ type }) => (type !== DETAIL ? '0.625rem 2.8125rem' : '0')};
  margin-right: ${({ type }) => (type !== DETAIL ? '5rem' : '0')};
  color: white;
  font-style: none;
`;
