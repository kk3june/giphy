import React from 'react';
import SearchButton from '../components/atoms/Buttons/SearchButton';
import { VAC } from 'react-vac';

const SearchButtonLayer = ({ onClick }: any) => {
  const searchButtonViewProps = {
    onClick,
  };

  return (
    <>
      <SearchButton {...searchButtonViewProps} />
      {/* <VAC name="SearchButton" data={searchButtonViewProps} /> */}
    </>
  );
};

export default SearchButtonLayer;
