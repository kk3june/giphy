import React from 'react';

import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

import Header from 'components/atoms/Header/Header';
import NormalGrid from 'components/modules/Gird/NormalGrid';
import SidebarBox from 'components/modules/SidebarBox/SidebarBox';
import { getSearchData } from 'pages/api/fetchAPI';
import { LARGE_HEADER, QUERY_KEYS, RELATED_GIFS } from 'src/constants';
import wrapper from 'store/index';
import { ParamTypes } from 'types/types';

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(() => async (context) => {
  const param = context.query.menu;

  return {
    props: { param },
  };
});

const Menu = ({ param }: ParamTypes) => {
  const { data: searchData, isSuccess } = useQuery([QUERY_KEYS.SEARCH_DATA], () => getSearchData(param));

  const MENU_LIST = {
    reactions: {
      title: 'Reaction GIFs',
      data: {
        user: {
          type: 'menuSidebar',
          avatar: 'https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif',
          description: "Don't tell it to me, GIF it to me!",
          facebook_url: 'https://www.facebook.com/GIPHY/',
          instagram_url: 'https://www.instagram.com/giphy/',
          twitter_url: 'https://twitter.com/giphy',
          tumblr_url: 'https://blog.giphy.com/',
        },
      },
    },
    entertainment: {
      title: 'Entertainment GIFs',
      data: {
        user: {
          type: 'menuSidebar',
          avatar: 'https://media.giphy.com/avatars/entertainment/Poc7fb6dD9q5/200h.gif',
          description: 'Get the latest GIFs from movies, TV, music, celebrities.',
          facebook_url: 'https://www.facebook.com/GIPHY/',
          instagram_url: 'https://www.instagram.com/giphy/',
          twitter_url: 'https://twitter.com/giphy',
          tumblr_url: 'https://blog.giphy.com/',
        },
      },
    },
    sports: {
      title: 'Sports GIFs',
      data: {
        user: {
          type: 'menuSidebar',
          avatar: 'https://media.giphy.com/channel_assets/sports/P658KMA9mwy4/200h.gif',
          description: 'Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We’ve got them all!',
          facebook_url: 'https://www.facebook.com/giphysports',
          instagram_url: 'https://twitter.com/giphysports',
          twitter_url: 'https://www.instagram.com/giphy/',
          tumblr_url: 'https://blog.giphy.com/',
        },
      },
    },
    stickers: {
      title: 'Stickers',
      data: {
        user: {
          type: 'menuSidebar',
          avatar: 'https://media.giphy.com/avatars/stickers/Kk9DxBFnkaxi/200h.gif',
          description: "Send some stickers to all your friends, and frenemies! They won't believe their eyes!",
        },
      },
    },
    artists: {
      title: 'Artists',
      data: {
        user: {
          type: 'menuSidebar',
          avatar:
            'https://media3.giphy.com/media/3ohhwDfcBvBPpD9RZu/200w.gif?cid=ecf05e47smoslqpfb24cd3c30xcm5wx70benj1jicifmaw8s&rid=200w.gif&ct=g',
          description: "Look around artist's master piceses in GIPHY unless go to museum",
        },
      },
    },
  };

  const targetData = MENU_LIST[param as keyof typeof MENU_LIST];

  return (
    <div
      css={css`
        display: flex;
        margin-top: 1.875rem;
      `}
    >
      <SidebarBox data={[targetData.data]} />
      <div>
        <Header name={targetData.title} type={LARGE_HEADER} />
        <NormalGrid data={searchData} type={RELATED_GIFS} isLoading={isSuccess} />
      </div>
    </div>
  );
};

export default Menu;
