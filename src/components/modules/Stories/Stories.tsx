import StoriesItem from 'components/atoms/StoriesItem/StoriesItem';
import { NORMAL, WIDE } from 'src/constants';

import { StyledStories } from './Stories.styled';

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
          if (chkArr.indexOf(idx) !== -1) return <StoriesItem data={item} type={NORMAL} key={item.id} />;
          return <StoriesItem data={item} type={WIDE} key={item.id} />;
        })}
    </StyledStories>
  );
};

export default Stories;
