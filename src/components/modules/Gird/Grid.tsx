import { css } from '@emotion/react';

import UserInfo from '../../atoms/UserInfo/UserInfo';

import { StyledGrid, GridItem, ClipVideo, Title } from './Grid.styled';

const Grid = ({ data }: any) => {
  return (
    <StyledGrid>
      {data &&
        data.map((el: any) => (
          <GridItem key={el.id} href={`clips/${el.id}`}>
            <ClipVideo key={el.id} autoPlay muted loop>
              <source src={el.images.original.mp4} type="video/mp4" />
            </ClipVideo>
            <Title>{el.title}</Title>

            <UserInfo avatar={el.user.avatar_url} userName={el.user.display_name} />
          </GridItem>
        ))}
    </StyledGrid>
  );
};

export default Grid;
