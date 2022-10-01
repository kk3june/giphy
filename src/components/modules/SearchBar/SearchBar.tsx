import React, { useState } from 'react';

import SearchInput from 'components/atoms/SearchInput/SearchInput';
import { SearchBarWrapper } from 'components/modules/SearchBar/SearchBar.styled';

const SearchBar = ({ inputProps }: any) => {
  return (
    <SearchBarWrapper>
      <SearchInput {...inputProps} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
