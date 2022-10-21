import ClipCard from 'components/atoms/ClipCard/ClipCard';

import StyledGrid from './Grid.styled';

const Grid = ({ data, type, isLoading }: any) => {
  return isLoading ? (
    <StyledGrid>{data && data.map((item: any) => <ClipCard data={item} key={item.id} type={type} />)}</StyledGrid>
  ) : (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  );
};

export default Grid;
