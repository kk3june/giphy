import styled from '@emotion/styled';

import { CLIPS, GIFS } from 'src/constants';

type CarouselTypes = {
  width: string | undefined;
  height: string | undefined;
  type: string | undefined;
};

const StyledCarousel = styled.div<CarouselTypes>`
  width: ${({ type }) => (type === GIFS ? '48rem' : '')};
  width: ${({ type }) => (type === CLIPS ? '48rem' : '')};
  height: ${({ type }) => (type === GIFS ? '62.5rem' : '')};
`;

export default StyledCarousel;
