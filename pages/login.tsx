import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

import CardLayer from 'layer/CardLayer';
import LoginComponentLayer from 'layer/LoginComponentLayer';
import wrapper, { RootState } from 'store/index';
import { fetchRandom } from 'store/random/randomThunk';

const WithOutNavWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Half = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(fetchRandom());
  return { props: {} };
});

const Login = () => {
  const { randomContent, randomContentIsLoading } = useSelector((state: RootState) => state.random);

  const LOGIN_PAGE = 'LOGIN_PAGE';
  return (
    <WithOutNavWrapper>
      <LoginComponentLayer />
      <Half
        css={css`
          filter: blur(100px);
        `}
      >
        <CardLayer data={randomContent} type={LOGIN_PAGE} isLoading={randomContentIsLoading} />
      </Half>
      <Half>
        <CardLayer data={randomContent} type={LOGIN_PAGE} isLoading={randomContentIsLoading} />
      </Half>
    </WithOutNavWrapper>
  );
};

export default Login;
