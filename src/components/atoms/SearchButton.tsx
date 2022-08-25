import React from 'react';
import SearchButtonView from './SearchButtonView';
import { VAC } from 'react-vac';

const SearchButton = ({ onClick }: any) => {
  const searchButtonViewProps = {
    onClick,
  };

  return (
    <>
      <SearchButtonView {...searchButtonViewProps} />
      {/* <VAC name="SearchButtonView" data={searchButtonViewProps} /> */}
    </>
  );
};

export default SearchButton;
