import styled from '@emotion/styled';

export const GridItem = styled.a<{ type?: string }>`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const ClipVideo = styled.video<{ type?: string }>`
  width: ${({ type }) => (type === 'detail' ? '48.5rem' : '')};
  width: ${({ type }) => (type === 'normal' ? '14.5rem' : '')};
`;

export const Title = styled.div<{ type?: string }>`
  width: 100%;
  margin: 5px 0;
  padding: ${({ type }) => (type === 'detail' ? '10px 0' : '')};
  font-size: ${({ type }) => (type === 'detail' ? '24px' : '17px')};
  font-weight: bold;
  text-decoration: none;
  text-overflow: ellipsis;
  color: white;
`;
