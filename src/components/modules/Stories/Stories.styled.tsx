import styled from '@emotion/styled';

export const StyledStories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 66rem;
  height: 100%;
  > a {
    display: block;
    cursor: pointer;
    position: relative;
    margin-bottom: 0.625rem;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 0 0.3125rem;
    }
  }
`;

export default StyledStories;
