/* eslint-disable react/require-default-props */
import { css } from '@emotion/react';
import Image from 'next/image';

import { StyledImg, UserName } from './UserInfo.styled';

interface UserInfoProps {
  type?: string;
  name?: string;
  avatar: string;
  userName?: string;
}

const UserInfo = ({ type, avatar, name, userName }: UserInfoProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <StyledImg type={type}>
        <Image src={avatar} alt="userAvatar" width={25} height={25} />
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
