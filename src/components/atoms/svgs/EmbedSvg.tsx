import { css } from '@emotion/react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EmbedSvg = () => {
  return (
    <FontAwesomeIcon css={css`display:inline-block`} icon={faCode} size='xl'/>
  );
};

export default EmbedSvg;