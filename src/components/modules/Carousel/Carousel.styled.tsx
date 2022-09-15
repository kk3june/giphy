import styled from '@emotion/styled';

type CarouselTypes = {
  width: string | undefined;
  height: string | undefined;
  type: string | undefined;
};

const StyledCarousel = styled.div<CarouselTypes>`
  width: ${({ type }) => (type === 'gifs' ? '768px' : '')};
  width: ${({ type }) => (type === 'clips' ? '768px' : '')};
  height: ${({ type }) => (type === 'gifs' ? '1000px' : '')};
`;

export default StyledCarousel;
