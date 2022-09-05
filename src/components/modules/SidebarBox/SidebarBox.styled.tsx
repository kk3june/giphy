import styled from '@emotion/styled';

export const StyledSpan = styled.span`
  display: block;
  color: rgb(166, 166, 166);
  margin: 0px 0px 4px;
  font-size: 14px;
  line-height: 1.2rem;
  padding: 20px 0;
`;

export const SnsIcon = styled.a`
  margin-right: 20px;
  img {
    margin-top: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const SourceLink = styled.a`
  display: flex;
  color: white;
  font-weight: ${props => (props.type === 'bold' ? 'bold' : '')};
  text-decoration: none;
`;

export const LearnMoreGif = styled.img`
  position: absolute;
  width: calc(100% + 30px);
  top: 10px;
  left: -15px;
`;

export const StyledTextBox = styled.span<any>`
  display: inline-block;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background-color: rgb(33, 33, 33);
  margin-top: ${props => (props.learnmore && '140px')};
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const SideGif = styled.div``;

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
