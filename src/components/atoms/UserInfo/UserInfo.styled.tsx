import styled from '@emotion/styled';

type UserInfoProps = {
  type?: string;
};

export const StyledImg = styled.span<UserInfoProps>`
  img {
    width: ${({ type }) => (type === 'sidebar' ? '3.125rem' : '1.5625rem')};
    height: ${({ type }) => (type === 'sidebar' ? '3.125rem' : '1.5625rem')};
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
