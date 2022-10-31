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

export const StyledImg = styled.div<UserInfoProps>`
  position: relative;
  margin-right: 0.5rem;
  width: 1.5625rem;
  height: 1.5625rem;
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
