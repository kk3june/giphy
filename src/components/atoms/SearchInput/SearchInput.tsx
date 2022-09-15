import { css } from '@emotion/react';

import { InputBanner, Input } from './SearchInput.styled';

const SearchInput = ({ value, onChange }: any) => {
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
      <InputBanner>{value ? '' : <span>Search All the GIFs and Stickers</span>}</InputBanner>
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export default SearchInput;
