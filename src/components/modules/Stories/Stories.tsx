import { StyledStories, WideStory, NormalStory, TitleStory } from './Stories.styled';

const Stories = ({ data, chkArr, isLoading }: any) => {
  return isLoading ? (
    <div
      css={{
        fontSize: '100px',
      }}
    >
      isLoading
    </div>
  ) : (
    <StyledStories>
      {data &&
        chkArr &&
        data?.map((item: any, idx: number) => {
          if (chkArr.indexOf(idx) !== -1)
            return (
              <WideStory key={item.id} href={`gifs/${item.id}`}>
                <TitleStory>{item.title}</TitleStory>
                <img src={item.images.original.url} alt="Story Gif" />
              </WideStory>
            );
          return (
            <NormalStory key={item.id} href={`gifs/${item.id}`}>
              <TitleStory>{item.title}</TitleStory>
              <img src={item.images.original.url} alt="Story Gif" />
            </NormalStory>
          );
        })}

      {data &&
        !chkArr &&
        data?.map((item: any, idx: number) => (
          <NormalStory key={item.id} href={`gifs/${item.id}`}>
            <TitleStory>{item.title}</TitleStory>
            <img src={item.images.original.url} alt="Story Gif" />
          </NormalStory>
        ))}
    </StyledStories>
  );
};

export default Stories;
