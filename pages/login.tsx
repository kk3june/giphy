import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';

import CardLayer from 'layer/CardLayer';
import LoginComponentLayer from 'layer/LoginComponentLayer';
import { QUERY_KEYS } from 'src/constants';

import { getRandomGif } from './api/fetchAPI';

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

const Login = () => {
  const { data: randomContent, isSuccess } = useQuery([QUERY_KEYS.GET_RANDOM], () => getRandomGif());

  const LOGIN_PAGE = 'LOGIN_PAGE';
  return (
    <WithOutNavWrapper>
      <LoginComponentLayer />
      <Half
        css={css`
          filter: blur(100px);
        `}
      >
        <CardLayer data={randomContent} type={LOGIN_PAGE} isLoading={isSuccess} />
      </Half>
      <Half>
        <CardLayer data={randomContent} type={LOGIN_PAGE} isLoading={isSuccess} />
      </Half>
    </WithOutNavWrapper>
  );
};

export default Login;
