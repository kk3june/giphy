import React from 'react';

import { css } from '@emotion/react';

import { BUTTON_LINK, LOG_IN_APPLE_TEXT, LOG_IN_FACEBOOK_TEXT } from 'src/constants';

import { ButtonItem, ButtonItemClickable } from './Button.styled';

const Button = ({ name, type }: any) => {
  return type === BUTTON_LINK ? (
    <a
      href={name}
      css={css`
        text-decoration: none;
      `}
    >
      <ButtonItem name={name}>
        {name === LOG_IN_FACEBOOK_TEXT && (
          <img
            css={css`
              width: 20px;
              height: 20px;
              margin-right: 0.5rem;
            `}
            src="/images/snsIcon/facebook.png"
            alt="login with facebook"
          />
        )}
        {name === LOG_IN_APPLE_TEXT && (
          <img
            css={css`
              width: 20px;
              height: 20px;
              margin-right: 0.5rem;
            `}
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
