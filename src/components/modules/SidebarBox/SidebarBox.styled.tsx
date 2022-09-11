import styled from '@emotion/styled';

export const StyledSpan = styled.span`
  display: block;
  width: 100%;
  color: rgb(166, 166, 166);
  margin: 0px 0px 4px;
  font-size: 14px;
  line-height: 1.2rem;
  padding: 20px 0;
  word-break: break-all;
`;

export const SnsIcon = styled.a`
  margin-right: 20px;
  img {
    margin-top: 10px;
    width: 20px;
    height: 20px;
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
  width: 230px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LearnMoreGif = styled.img`
  position: absolute;
  width: 270px;
  top: 10px;
  left: -15px;
  z-index: 2;
`;

export const StyledTextBox = styled.span<{ learnmore: string }>`
  display: inline-block;
  width: 97%;
  line-height: 3rem;
  background-color: rgb(33, 33, 33);
  position: ${({ learnmore }) => learnmore && 'absolute'};
  top: ${({ learnmore }) => learnmore && '190px'};
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
    width: 40px;
    height: 40px;
    padding: 5px 10px;
    margin-right: 1rem;
    background-image: linear-gradient(135deg, #e646b6 0%, #6157ff 100%);
  }
`;
