import styled from '@emotion/styled';

const WIDTH_TYPE = {
  NORMAL: '33rem',
  WIDE: '16.5rem',
};

export const StyledStory = styled.a<{ type: any }>`
  height: 18.75rem;
  width: ${({ type }) => WIDTH_TYPE[type as keyof typeof WIDTH_TYPE]};
  & > .story_item {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const TitleStory = styled.span`
  position: absolute;
  bottom: 0;
  padding: 1.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
  z-index: 2;
`;

export const StyledSkeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
`;
