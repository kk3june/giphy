import { GiphyFetch } from '@giphy/js-fetch-api';

export const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY as string);

export const getTrendingGifs = async () => {
  try {
    const { data: gifs } = await gf.trending({ limit: 21 });
    return gifs;
  } catch (e) {
    return console.log('error');
  }
};

export const getArtistGifs = async () => {
  const { data: gifs } = await gf.gifs('art', 'loop');

  return gifs;
};

export const getTrendingClips = async () => {
  const { data: clips } = await gf.trending({ type: 'videos', limit: 3 });
  return clips;
};

export const getStoryGifs = async ({ limit, offset }: any) => {
  const { data: gifs, pagination } = await gf.trending({ limit, offset });
  return { gifs, pagination };
};

export const getGifById = async (id: string) => {
  const { data: gifs } = await gf.gifs([id]);
  return gifs;
};

export const getRelatedGifs = async (id: string) => {
  const { data: gifs } = await gf.related(id, { limit: 10 });
  return gifs;
};

export const getRelatedClips = async (id: string) => {
  const { data: clips } = await gf.related(id, { limit: 3 });
  return clips;
};

export const getUpNext = async (id: string) => {
  const { data: clips } = await gf.related(id, { limit: 4 });
  return clips;
};

export const getClipById = async (id: string) => {
  const { data: gifs } = await gf.gifs([id]);
  return gifs;
};
