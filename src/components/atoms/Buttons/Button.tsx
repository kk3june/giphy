import React from 'react';

import { css } from '@emotion/react';
import Image from 'next/image';

import { BUTTON_LINK, LOG_IN_APPLE_TEXT, LOG_IN_FACEBOOK_TEXT } from 'src/constants';

import { ButtonItem, ButtonItemClickable } from './Button.styled';

const Button = ({ name, type }: any) => {
  return type === BUTTON_LINK ? (
    <a
      href={name}
      css={css`
        text-decoration: none;
      `}
      aria-label="LogIn"
    >
      <ButtonItem name={name}>
        {name === LOG_IN_FACEBOOK_TEXT && (
          <Image
            css={css`
              margin-right: 0.5rem;
            `}
            width={20}
            height={20}
            src="/images/snsIcon/facebook.png"
            alt="login with facebook"
          />
        )}
        {name === LOG_IN_APPLE_TEXT && (
          <Image
            css={css`
              margin-right: 0.5rem;
            `}
            width={20}
            height={20}
            src="/images/snsIcon/apple.png"
            alt="login with appple"
          />
        )}
        {name}
      </ButtonItem>
    </a>
  ) : (
    <ButtonItemClickable name={name}>{name}</ButtonItemClickable>
  );
};

export default Button;
