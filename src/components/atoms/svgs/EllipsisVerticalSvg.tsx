import { css } from '@emotion/react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EllipsisVertical = () => {
  return (
    <FontAwesomeIcon
      css={css`
        display: inline-block;
      `}
      icon={faEllipsisVertical}
      size="xl"
    />
  );
};

export default EllipsisVertical;
