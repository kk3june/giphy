import React from 'react';

import { css } from '@emotion/react';

interface InputType {
  name: string;
}

const Inputs = ({ name }: InputType) => {
  return (
    <input
      css={css`
        height: 2.5rem;
        margin-bottom: 0.75rem;
        padding: 5px 5px 5px 12px;
        border: none;
        border-radius: 3px;
      `}
      type="text"
      placeholder={name}
    />
  );
};

export default Inputs;
