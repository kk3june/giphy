import { css } from '@emotion/react';

const Floating = () => {
  return (
    <div
      css={css`
        position: fixed;
        right: 0.625rem;
        bottom: 0.625rem;
      `}
    >
      <img src="/images/Poweredby_640px-Black_HorizLogo.png" width={150} alt="powered by giphy" />
    </div>
  );
};

export default Floating;
