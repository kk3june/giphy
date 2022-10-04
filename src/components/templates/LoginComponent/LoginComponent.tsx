import React from 'react';

import { css } from '@emotion/react';
import Image from 'next/image';

import Button from 'components/atoms/Buttons/Button';
import Inputs from 'components/atoms/Inputs/Inputs';
import LoginPageButton from 'components/modules/LoginPageButton/LoginPageButton';
import GiphyAnimated from 'public/images/login_logo.gif';
import {
  BUTTON_LINK,
  LOG_IN_TEXT,
  LOG_IN_FACEBOOK_TEXT,
  LOG_IN_APPLE_TEXT,
  SIGN_UP_FACEBOOK_TEXT,
  SIGN_UP_APPLE_TEXT,
} from 'src/constants';

const LoginComponent = () => {
  return (
    <div
      css={css`
        width: 22rem;
      `}
    >
      <Image src={GiphyAnimated} alt="giphy_animated" />
      <LoginPageButton />
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <Inputs name="Email Address" />
        {/* {!loginState && <Inputs name="Username" />} */}
        <Inputs name="Password" />
        {/* {!loginState && <Inputs name="Confirm Your Password" />} */}
      </div>
      <div
        css={css`
          height: 2.125rem;
        `}
      >
        <Button name={LOG_IN_TEXT} type={BUTTON_LINK} />
      </div>
      <div
        css={css`
          text-align: center;
          margin-top: 0.4375rem;
          margin-bottom: 1.3125rem;
        `}
      >
        <a
          href="/"
          css={css`
            font-size: 0.8125rem;
            font-weight: bold;
            text-decoration: none;
            color: rgb(0, 204, 255);
          `}
        >
          Forgot Your Password
        </a>
      </div>
      <Button name={LOG_IN_FACEBOOK_TEXT} type={BUTTON_LINK} />
      <Button name={LOG_IN_APPLE_TEXT} type={BUTTON_LINK} />
      {/* <Button name={loginState ? LOG_IN_FACEBOOK_TEXT : SIGN_UP_FACEBOOK_TEXT} type={BUTTON_LINK} />
      <Button name={loginState ? LOG_IN_APPLE_TEXT : SIGN_UP_APPLE_TEXT} type={BUTTON_LINK} /> */}
      <div
        css={css`
          margin: 0.625rem 0;
          text-align: center;
          font-size: 0.8125rem;
          font-weight: bold;
        `}
      >
        By logging in you agree to GIPHY&apos;s
        <a
          href="https://support.giphy.com/hc/en-us/articles/360020027752-GIPHY-Terms-of-Service"
          css={css`
            color: rgb(0, 204, 255);
            text-decoration: none;
          `}
        >
          &nbsp;Terms of Service
        </a>
      </div>
    </div>
  );
};

export default LoginComponent;
