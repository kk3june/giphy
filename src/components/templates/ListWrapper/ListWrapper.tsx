import React from 'react';

import { css } from '@emotion/react';

import Header from 'components/atoms/Header/Header';

interface ListWrapperTypes {
  name: string;
  children: JSX.Element | JSX.Element[];
  type: string;
}

const ListWrapper = ({ name, type, children }: ListWrapperTypes) => {
  return (
    <div
      css={css`
        overflow: hidden;
      `}
    >
      <Header name={name} type={type} />
      {children}
    </div>
  );
};

export default ListWrapper;
