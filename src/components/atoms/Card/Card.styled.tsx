import styled from '@emotion/styled';

type StyledCardProps = {
  width?: string | undefined;
  height?: string | undefined;
  type?: string | undefined;
};

export const StyledCardWrapper = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: ${({ type }) => (type === 'gifs' ? 'column' : '')};
  overflow: hidden;
  flex-wrap: ${({ type }) => (type === 'gifs' ? 'wrap' : '')};
  height: ${({ type }) => (type === 'gifs' ? '1000px' : '')};
`;

export const StyledCard = styled.div<StyledCardProps>`
  height: ${({ height }) => height};
`;

export const StyledImg = styled.img<StyledCardProps>`
  display: inline-block;
  margin: 0 2px;
  border-radius: 5px;
  height: 100%;
  min-width: ${({ type }) => (type === 'artists' ? '343px' : '')};
  width: ${({ type }) => (type === 'gifs' ? '248px' : '')};
  width: ${({ type }) => (type === 'clips' ? '248px' : '')};
  object-fit: cover;
`;
