import styled from '@emotion/styled';

export const StyledSpan = styled.span`
  display: block;
  width: 100%;
  color: rgb(166, 166, 166);
  margin: 0 0 0.25rem;
  font-size: 0.875rem;
  line-height: 1.2rem;
  padding: 1.25rem 0 0.2rem;
  word-break: 'word-break';
`;

export const SnsIcon = styled.a`
  margin-right: 1.25rem;

  img {
    margin-top: 0.625rem;
  }
`;

export const SourceLink = styled.a<{ type: string }>`
  display: flex;
  color: white;
  font-weight: ${({ type }) => (type === 'bold' ? 'bold' : '')};
  text-decoration: none;
  text-overflow: ellipsis;
`;
export const SourceLinkUrl = styled.span`
  display: inline-block;
  width: 13.375rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LearnMoreGif = styled.div`
  position: absolute;
  width: 16.875rem;
  height: 12rem;
  top: 1rem;
  left: -0.9375rem;
  z-index: 2;
`;

export const StyledTextBox = styled.span<{ learnmore?: any }>`
  display: inline-block;
  width: 97%;
  line-height: 3rem;
  background-color: rgb(33, 33, 33);
  position: ${({ learnmore }) => learnmore && 'absolute'};
  top: ${({ learnmore }) => learnmore && '12.5rem'};
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const SideGif = styled.div`
  width: inherit;
`;

export const SideGifIcon = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.3125rem 0.625rem;
    margin-right: 1rem;
    background-image: linear-gradient(135deg, #e646b6 0%, #6157ff 100%);
  }
`;
