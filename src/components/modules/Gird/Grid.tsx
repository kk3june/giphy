import ClipCard from 'components/atoms/ClipCard/ClipCard';

import StyledGrid from './Grid.styled';

const Grid = ({ data, type, isLoading }: any) => {
  return (
    <StyledGrid>
      {data && data.map((item: any) => <ClipCard data={item} key={item.id} type={type} isLoading={isLoading} />)}
    </StyledGrid>
  );
};

export default Grid;
