import { VAC } from 'react-vac';

import Stories from 'components/modules/Stories/Stories';

const StoriesLayer = ({ data, type, isLoading }: any) => {
  const chkArr = [0, 5, 11, 17, 24];
  const limitedStories = data?.slice(0, data.length - 1);

  const storiesProps = {
    data: limitedStories,
    chkArr,
    isLoading,
  };
  return (
    <>
      <Stories {...storiesProps} />
      {/* <VAC name="Stories" data={storiesProps} /> */}
    </>
  );
};

export default StoriesLayer;
