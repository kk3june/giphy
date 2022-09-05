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
    margin-bottom: 10px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 0 5px;
    }
  }
`;

export const WideStory = styled.a`
  height: 300px;
  width: 33rem;
`;
export const NormalStory = styled.a`
  height: 300px;
  width: 16.5rem;
`;

export const TitleStory = styled.span`
  position: absolute;
  bottom: 0;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
