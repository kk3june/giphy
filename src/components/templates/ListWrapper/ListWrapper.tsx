import React from 'react';

import Header from 'components/atoms/Header/Header';

interface ListWrapperTypes {
  name: string;
  children: JSX.Element | JSX.Element[];
}

const ListWrapper = ({ name, children }: ListWrapperTypes) => {
  return (
    <div>
      <Header name={name} />
      {children}
    </div>
  );
};

export default ListWrapper;
