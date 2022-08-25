import React from 'react';
import SearchButtonView from './SearchButtonView';
import { VAC } from 'react-vac';

const SearchButton = ({ value, onClick }: any) => {
  const searchButtonProps = {
    value,
    onClick,
  };

  return (
    <>
      <SearchButtonView {...searchButtonProps} />
      {/* <VAC name="SearchButtonView" data={searchButtonProps} /> */}
    </>
  );
};

export default SearchButton;
