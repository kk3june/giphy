import { css } from '@emotion/react';

import SearchBtton from '../Buttons/SearchButton';

import { InputBanner, Input } from './SearchInput.styled';

const SearchInput = ({ value, handleChange, handleSubmit }: any) => {
  return (
    <form
      id="searchInput"
      css={css`
        position: relative;
        display: flex;
        width: 100%;
        background-color: white;
        border-radius: 0.9375rem;
      `}
      onSubmit={handleSubmit}
    >
      <InputBanner>{value ? '' : <label htmlFor="searchInput">Search All the GIFs and Stickers</label>}</InputBanner>
      <Input value={value} onChange={handleChange} />
      <SearchBtton />
    </form>
  );
};

export default SearchInput;
