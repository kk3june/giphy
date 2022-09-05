import React from 'react';
import { css } from '@emotion/react';

const Floating = () => {
  return (
    <div
      css={css`
        position: fixed;
        right: 10px;
        bottom: 10px;
      `}
    >
      <img src="/images/Poweredby_640px-Black_HorizLogo.png" width={150} />
    </div>
  );
};

export default Floating;
