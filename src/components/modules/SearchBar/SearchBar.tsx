import React, { useState } from 'react';

import styled from '@emotion/styled';

import SearchButtonLayer from '../../../layer/SearchButtonLayer';
import SearchInputLayer from '../../../layer/SearchInputLayer';

import { SearchBarWrapper } from './SearchBar.styled';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const handleSubmit = (val: string) => {
    console.log(val);
  };

  const searchInputProps = {
    value,
    onChange: (event: any) => {
      setValue(event.target?.value);
    },
  };

  const searchButtonProps = {
    value,
    onClick: () => {
      handleSubmit?.(value);
      setValue('');
    },
  };

  return (
    <SearchBarWrapper>
      <SearchInputLayer {...searchInputProps} />
      <SearchButtonLayer {...searchButtonProps} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
