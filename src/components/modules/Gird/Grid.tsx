import UserInfo from '../../atoms/UserInfo/UserInfo';

import { StyledGrid, GridItem, ClipVideo } from './Grid.styled';

const Grid = ({ data }: any) => {
  return (
    <StyledGrid>
      {data &&
        data.map((el: any) => (
          <GridItem key={el.id}>
            <ClipVideo key={el.id} autoPlay muted loop>
              <source src={el.images.original.mp4} type="video/mp4" />
            </ClipVideo>
            <UserInfo title={el.title} avatar={el.user.avatar_url} userName={el.user.display_name} />
          </GridItem>
        ))}
    </StyledGrid>
  );
};

export default Grid;
