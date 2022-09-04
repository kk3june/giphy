import { Title, StyledImg, UserName } from './UserInfo.styled';
import { css } from '@emotion/react';

interface UserInfoProps {
  type?: string;
  title?: string;
  name?: string;
  avatar: string;
  userName: string;
}

const UserInfo = ({ type, title, avatar, name, userName }: UserInfoProps) => {
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
        <StyledImg type={type}>
          <img src={avatar} />
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
    </>
  );
};

export default UserInfo;
