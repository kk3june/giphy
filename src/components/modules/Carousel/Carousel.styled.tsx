import styled from '@emotion/styled';

import { GIFS } from 'src/constants';

type CarouselTypes = {
  width: string | undefined;
  height: string | undefined;
  type: string | undefined;
};

const WIDTH_TYPE = {
  GIFS: '48rem',
  CLIPS: '48rem',
};

const StyledCarousel = styled.div<CarouselTypes>`
  position: relative;
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
  height: ${({ type }) => (type === GIFS ? '62.5rem' : '')};
`;

export default StyledCarousel;
