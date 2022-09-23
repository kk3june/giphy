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

export const WideStory = styled.a`
  height: 18.75rem;
  width: 33rem;
`;
export const NormalStory = styled.a`
  height: 18.75rem;
  width: 16.5rem;
`;

export const TitleStory = styled.span`
  position: absolute;
  bottom: 0;
  padding: 1.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
`;
