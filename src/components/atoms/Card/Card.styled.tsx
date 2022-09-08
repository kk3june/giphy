import styled from '@emotion/styled';

type StyledCardProps = {
  width?: string | undefined;
  height?: string | undefined;
  type?: string | undefined;
};

export const StyledCardWrapper = styled.div<StyledCardProps>`
  display: flex;
  justify-content: ${({ type }) => (type !== 'artists' ? 'space-between' : '')};
  flex-wrap: ${({ type }) => (type === 'gifs' ? 'wrap' : '')};
  width: 100%;
  height: ${({ type }) => (type === 'gifs' ? '1000px' : '')};

  overflow: hidden;
`;

export const StyledCard = styled.div<StyledCardProps>`
  width: ${({ type }) => (type === 'gifs' ? '248px' : '')};
  height: ${({ height }) => height};
  margin-bottom: 10px;
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
