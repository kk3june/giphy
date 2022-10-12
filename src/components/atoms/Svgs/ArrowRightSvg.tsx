import { css } from '@emotion/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TRENDING } from 'src/constants';

type CarouselType = {
  type: string | undefined;
  onClick: any;
};

const ArrowRightSvg = ({ type, onClick }: CarouselType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      css={css`
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        height: ${type === TRENDING ? '8.75rem' : '16.8125rem'};
        padding: 0 0.5rem;
        opacity: 1;
        border: none;
        background: linear-gradient(-90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%);
        cursor: pointer;
        color: #9e9c9c;
        :hover {
          color: white;
        }
      `}
    >
      <FontAwesomeIcon
        css={css`
          display: inline-block;
        `}
        icon={faChevronRight}
        size="xl"
      />
    </button>
  );
};

export default ArrowRightSvg;
