import { css } from '@emotion/react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ShareSvg = () => {
  return (
    <FontAwesomeIcon css={css`display:inline-block`} icon={faPaperPlane} size='xl'/>
  );
};

export default ShareSvg;