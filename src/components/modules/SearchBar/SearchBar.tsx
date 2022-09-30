import React, { useState } from 'react';

import SearchButton from 'components/atoms/Buttons/SearchButton';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import { SearchBarWrapper } from 'components/modules/SearchBar/SearchBar.styled';

const SearchBar = ({ inputProps, buttonProps }: any) => {
  return (
    <SearchBarWrapper>
      <SearchInput {...inputProps} />
      <SearchButton {...buttonProps} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
