import { css } from '@emotion/react';
import Image from 'next/image';

const Floating = () => {
  return (
    <div
      css={css`
        position: fixed;
        right: 0.625rem;
        bottom: 0.625rem;
      `}
    >
      <Image src="/images/Poweredby_640px-Black_HorizLogo.png" width={150} height={20} alt="powered by giphy" />
    </div>
  );
};

export default Floating;
