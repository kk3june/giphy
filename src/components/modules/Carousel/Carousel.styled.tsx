import styled from '@emotion/styled';

const StyledCarousel = styled.div<{ height: string | undefined }>`
  width: 66rem;
  height: ${({ height }) => height};
`;

export default StyledCarousel;
