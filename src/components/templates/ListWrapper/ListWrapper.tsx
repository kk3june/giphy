import React from 'react';

import Header from 'components/atoms/Header/Header';

interface ListWrapperTypes {
  name: string;
  children: JSX.Element | JSX.Element[];
  type: string;
}

const ListWrapper = ({ name, type, children }: ListWrapperTypes) => {
  return (
    <div>
      <Header name={name} type={type} />
      {children}
    </div>
  );
};

export default ListWrapper;
