import React, { useEffect } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import CardLayer from 'layer/CardLayer';
import { AppDispatch } from 'store/index';
import { fetchRandom } from 'store/random/randomThunk';

const WithOutNavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Half = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { randomContent, randomContentIsLoading } = useSelector((state) => state.random);
  useEffect(() => {
    const getRandomContentAPI = () => {
      dispatch(fetchRandom());
    };
    getRandomContentAPI();
  }, []);

  const LOGIN_PAGE = 'LOGIN_PAGE';
  return (
    <WithOutNavWrapper>
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
