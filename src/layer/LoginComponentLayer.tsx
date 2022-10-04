import React, { useState } from 'react';

import { css } from '@emotion/react';

import LoginComponent from 'components/templates/LoginComponent/LoginComponent';

const LoginComponentLayer = () => {
  return (
    <div
      css={css`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        z-index: 1;
      `}
    >
      <LoginComponent />
    </div>
  );
};

export default LoginComponentLayer;
