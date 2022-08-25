import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SearchButton from './SearchButton';

const SearchInputView = ({ value, onChange }: any) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        width: 100%;
        background-color: white;
        border-radius: 15px;
      `}
    >
      <InputBanner>
        {value ? '' : <span>Search All the GIFs and Stickers</span>}
      </InputBanner>
      <SearchInput value={value} onChange={onChange} />
    </div>
  );
};

const InputBanner = styled.div`
  position: absolute;
  height: inherit;
  line-height: 50px;
  margin-left: 15px;
  color: rgb(166, 166, 166);
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-style: none;
  padding-left: 15px;
  z-index: 1;
  :focus {
    outline: none;
  }
`;

export default SearchInputView;
