import styled from '@emotion/styled';

type CarouselTypes = {
  width: string | undefined;
  height: string | undefined;
  type: string | undefined;
};

const StyledCarousel = styled.div<CarouselTypes>`
  width: ${({ type }) => (type === 'gifs' ? '48rem' : '')};
  width: ${({ type }) => (type === 'clips' ? '48rem' : '')};
  height: ${({ type }) => (type === 'gifs' ? '62.5rem' : '')};
`;

export default StyledCarousel;
