import { css } from '@emotion/react';

import ClipCard from 'components/atoms/ClipCard/ClipCard';

import StyledGrid from './Grid.styled';

const Grid = ({ data }: any) => {
  return <StyledGrid>{data && data.map((el: any) => <ClipCard data={el} key={el.id} />)}</StyledGrid>;
};

export default Grid;
