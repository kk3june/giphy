import styled from '@emotion/styled';

type UserInfoProps = {
  type?: string;
};

export const StyledImg = styled.span<UserInfoProps>`
  img {
    width: ${({ type }) => (type === 'sidebar' ? '50px' : '25px')};
    height: ${({ type }) => (type === 'sidebar' ? '50px' : '25px')};
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
