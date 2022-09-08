import { css } from '@emotion/react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LikeSvg = () => {
  return (
    <FontAwesomeIcon css={css`display:inline-block`} icon={faHeart} size='xl'/>
  );
};

export default LikeSvg;