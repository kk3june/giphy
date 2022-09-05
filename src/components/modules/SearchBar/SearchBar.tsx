import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchInputLayer from '../../../layer/SearchInputLayer';
import SearchButtonLayer from '../../../layer/SearchButtonLayer';
import { SearchBarWrapper } from './SearchBar.styled';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const handleSubmit = (value: string) => {
    console.log(value);
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
