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
  height: ${({ type }) => (type === 'gifs' ? '62.5rem' : '')};

  overflow: hidden;
`;

export const StyledCard = styled.div<StyledCardProps>`
  width: ${({ type }) => (type === 'gifs' ? '15.5rem' : '')};
  height: ${({ height }) => height};
  margin-bottom: 0.625rem;
`;

export const StyledImg = styled.img<StyledCardProps>`
  display: inline-block;
  margin: 0 0.125rem;
  border-radius: 0.3125rem;
  height: 100%;
  min-width: ${({ type }) => (type === 'artists' ? '21.4375rem' : '')};
  width: ${({ type }) => (type === 'gifs' ? '15.5rem' : '')};
  width: ${({ type }) => (type === 'clips' ? '15.5rem' : '')};
  object-fit: cover;
`;
