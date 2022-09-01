import { Title, StyledImg, UserName } from './UserInfo.styled';
import { css } from '@emotion/react';

interface UserInfoProps {
  title: string;
  avatar: string;
  userName: string;
}

const UserInfo = ({ title, avatar, userName }: UserInfoProps) => {
  return (
    <>
      <Title>
        <div
          css={css`
            margin: 10px 0;
          `}
        >
          {title}
        </div>
      </Title>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <StyledImg>
          <img src={avatar} />
        </StyledImg>
        <UserName>{userName}</UserName>
      </div>
    </>
  );
};

export default UserInfo;
