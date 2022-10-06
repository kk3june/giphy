import { css } from '@emotion/react';

import { StyledImg, UserName } from './UserInfo.styled';

interface UserInfoProps {
  type?: string;
  name?: string;
  avatar?: string;
  userName?: string;
}

const UserInfo = ({ type, avatar, name, userName }: UserInfoProps) => {
  if (type === undefined) {
    type = 'sidebar';
  }

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <StyledImg type={type}>
        <img src={avatar} alt="userAvatar" />
      </StyledImg>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <UserName>{name}</UserName>
        <UserName>
          {type === 'sidebar' ? '@' : ''}
          {userName}
        </UserName>
      </div>
    </div>
  );
};

export default UserInfo;
