import {
  StyledStories,
  WideStory,
  NormalStory,
  TitleStory,
} from './Stories.styled';

const Stories = ({ data, chkArr }: any) => {
  return (
    <>
      <StyledStories>
        {data &&
          data?.map((el: any, idx: number) => {
            if (chkArr.indexOf(idx) !== -1)
              return (
                <WideStory key={el.id} href={el.id}>
                  <TitleStory>{el.title}</TitleStory>
                  <img src={el.images.original.url} />
                </WideStory>
              );
            return (
              <NormalStory key={el.id} href={el.id}>
                <TitleStory>{el.title}</TitleStory>
                <img src={el.images.original.url} />
              </NormalStory>
            );
          })}
      </StyledStories>
    </>
  );
};

export default Stories;
