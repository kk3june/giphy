import styled from '@emotion/styled';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 15rem);
  grid-gap: 10px;
  overflow: hidden;
  & a > video {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  a:first-of-type {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
    video {
      height: 25.7rem;
    }
  }
  a:nth-of-type(2) {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
    video {
      height: 10rem;
    }
  }
  a:nth-of-type(3) {
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
