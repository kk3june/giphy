import { css } from '@emotion/react';

import ClipCard from 'components/atoms/ClipCard/ClipCard';

import StyledGrid from './Grid.styled';

const Grid = ({ data, type }: any) => {
  return <StyledGrid>{data && data.map((item: any) => <ClipCard data={item} key={item.id} type={type} />)}</StyledGrid>;
};

export default Grid;
