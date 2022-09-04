import styled from '@emotion/styled';

export const Title = styled.a`
  font-size: 17px;
  font-weight: bold;
`;

export const StyledImg = styled.a`
  img {
    width: ${props => (props.type === 'sidebar' ? '50px' : '25px')};
    height: ${props => (props.type === 'sidebar' ? '50px' : '25px')};
    margin-right: 8px;
  }
`;

export const UserName = styled.span`
  color: rgba(255, 255, 255, 0.8);
  display: block;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
