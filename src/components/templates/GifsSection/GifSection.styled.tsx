import styled from '@emotion/styled';

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
  margin: ${({ type }) => (type !== 'detail' ? '20px' : '0px 10px')};
  align-items: center;
`;

export const GifButtonName = styled.span`
  display: inline-block;
  margin-left: 20px;
  font-size: 1.1rem;
`;
export const GifButtonWrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: ${({ type }) => (type !== 'detail' ? 'column' : 'row')};
  padding: ${({ type }) => (type !== 'detail' ? '10px 45px' : '0')};
  margin-right: ${({ type }) => (type !== 'detail' ? '5rem' : '0')};
  color: white;
  font-style: none;
`;
