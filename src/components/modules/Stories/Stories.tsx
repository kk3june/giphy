import { StyledStories, WideStory, NormalStory, TitleStory } from './Stories.styled';

const Stories = ({ data, chkArr }: any) => {
  return (
    <StyledStories>
      {data &&
        chkArr &&
        data?.map((el: any, idx: number) => {
          if (chkArr.indexOf(idx) !== -1)
            return (
              <WideStory key={el.id} href={el.id}>
                <TitleStory>{el.title}</TitleStory>
                <img src={el.images.original.url} alt="Story Gif" />
              </WideStory>
            );
          return (
            <NormalStory key={el.id} href={el.id}>
              <TitleStory>{el.title}</TitleStory>
              <img src={el.images.original.url} alt="Story Gif" />
            </NormalStory>
          );
        })}

      {data &&
        !chkArr &&
        data?.map((el: any, idx: number) => (
          <NormalStory key={el.id} href={el.id}>
            <TitleStory>{el.title}</TitleStory>
            <img src={el.images.original.url} alt="Story Gif" />
          </NormalStory>
        ))}
    </StyledStories>
  );
};

export default Stories;
