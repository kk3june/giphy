import styled from '@emotion/styled';

const WIDTH_TYPE = {
  NORMAL: '32.125rem',
  WIDE: '15.6875rem',
};

export const StyledStory = styled.a<{ type: any }>`
  height: 20.715rem;
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
  overflow: hidden;
  margin-bottom: 0.625rem;

  .story_item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  &:hover {
    .hover {
      transform: scale(1.2);
      opacity: 1;
      transition: transform 0.5s;
    }
  }
`;

export const StoryContent = styled.div`
  position: relative;
  width: inherit;
  height: 19rem;
  overflow: hidden;
`;

export const StoryUserBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
`;

export const TitleStory = styled.span`
  position: absolute;
  bottom: 0;
  padding: 1.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
  z-index: 3;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(180deg, transparent, ${({ color }) => color});
  z-index: 2;
  opacity: 0;
`;

export const StyledSkeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;
export const StyledBottomTop = styled.div`
  width: 100%;
  height: 0.25rem;
  background-color: ${({ color }) => color};
  opacity: 1;
`;
export const StyledBottomMiddle = styled.div`
  width: 96%;
  height: 0.3rem;
  background-color: ${({ color }) => color};
  opacity: 0.8;
`;

export const StyledBottomBottom = styled.div`
  width: 92%;
  height: 0.3rem;
  background-color: ${({ color }) => color};
  opacity: 0.5;
`;
