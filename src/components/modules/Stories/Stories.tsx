import StoriesItem from 'components/atoms/StoriesItem/StoriesItem';
import { NORMAL, WIDE } from 'src/constants';

import { StyledStories } from './Stories.styled';

const Stories = ({ data, chkArr }: any) => {
  return (
    <StyledStories>
      {data &&
        chkArr &&
        data?.map((item: any, idx: number) => {
          if (chkArr.indexOf(idx) === -1) return <StoriesItem key={item.id} data={item} type={WIDE} />;
          return <StoriesItem key={item.id} data={item} type={NORMAL} />;
        })}
    </StyledStories>
  );
};

export default Stories;
