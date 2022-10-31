import { VAC } from 'react-vac';

import Stories from 'components/modules/Stories/Stories';

const StoriesLayer = ({ data, type, isLoading }: any) => {
  const chkArr = [
    0, 5, 11, 17, 24, 29, 35, 41, 48, 53, 59, 65, 72, 77, 83, 89, 96, 101, 107, 113, 120, 125, 131, 137, 143, 148, 154,
    160, 167,
  ];

  const storiesProps = {
    data,
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
