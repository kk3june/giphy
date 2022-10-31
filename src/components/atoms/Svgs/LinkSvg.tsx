import { css } from '@emotion/react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkSvg = ({ size }: any) => {
  return (
    <FontAwesomeIcon
      css={css`
        display: inline-block;
      `}
      icon={faLink}
      size={size}
    />
  );
};

export default LinkSvg;
