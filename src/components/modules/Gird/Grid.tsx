import ClipCard from 'components/atoms/ClipCard/ClipCard';

import StyledGrid from './Grid.styled';

const Grid = ({ data, type, isLoading }: any) => {
  return isLoading ? (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  ) : (
    <StyledGrid>{data && data.map((item: any) => <ClipCard data={item} key={item.id} type={type} />)}</StyledGrid>
  );
};

export default Grid;
