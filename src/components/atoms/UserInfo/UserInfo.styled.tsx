import styled from '@emotion/styled';

type UserInfoProps = {
  type?: string;
};

const TYPE_VALUE = {
  sidebar: '3.125rem',
  menuSidebar: '15rem',
  upNext: '1.5625rem',
  undefined: '1.5625rem',
};

export const StyledImg = styled.span<UserInfoProps>`
  img {
    width: ${({ type }) => TYPE_VALUE[type as keyof typeof TYPE_VALUE]};
    height: ${({ type }) => TYPE_VALUE[type as keyof typeof TYPE_VALUE]};
    margin-right: 0.5rem;
  }
`;

export const UserName = styled.span`
  color: rgba(255, 255, 255, 0.8);
  display: block;
  flex-shrink: 0;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
