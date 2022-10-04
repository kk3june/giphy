import React from 'react';

import Button from 'components/atoms/Buttons/Button';
import { BUTTON_CLIICK, LOG_IN_TEXT, SIGN_UP_TEXT } from 'src/constants';

import { StyledButtonWrapper } from './LoginPageButton.styled';

const LoginPageButton = () => {
  return (
    <StyledButtonWrapper>
      <Button name={LOG_IN_TEXT} type={BUTTON_CLIICK} />
      <Button name={SIGN_UP_TEXT} type={BUTTON_CLIICK} />
    </StyledButtonWrapper>
  );
};

export default LoginPageButton;
