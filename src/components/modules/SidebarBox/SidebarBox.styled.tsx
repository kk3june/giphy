import styled from '@emotion/styled';

export const StyledSpan = styled.span`
  display: block;
  color: rgb(166, 166, 166);
  margin: 0px 0px 4px;
  font-size: 14px;
  line-height: 1.2rem;
  padding-top: 20px;
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
  text-decoration: none;
  color: white;
  font-weight: ${props => (props.type === 'bold' ? 'bold' : '')};
`;

export const GifLink = styled.img`
  position: absolute;
  width: calc(100% + 30px);
  top: 10px;
  left: -15px;
`;

export const LearnMore = styled.span`
  display: inline-block;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background-color: rgb(33, 33, 33);
  margin-top: 120px;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
`;
