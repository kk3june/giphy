import styled from '@emotion/styled';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 15rem);
  grid-gap: 0.625rem;
  overflow: hidden;
  & div > a > video {
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  div:first-of-type {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
    a > video {
      height: 25.7rem;
    }
  }
  div:nth-of-type(2) {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
    a > video {
      height: 10rem;
    }
  }
  div:nth-of-type(3) {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 2;
    grid-row-end: 3;
    video {
      height: 10rem;
    }
  }
`;

export default StyledGrid;
