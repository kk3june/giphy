import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getGifById, getRelatedGifs, getRelatedClips } from '../api/fetchAPI';

const gifs = () => {
  const router = useRouter();
  const query = router.query;
  const params = query['gifs'];
  const [gifById, setGifById] = useState<any>();
  const [relatedGifs, setRelatedGifs] = useState<any>();
  const [relatedClips, setRelatedClips] = useState<any>();

  useEffect(() => {
    if (params) {
      getGifById(params as string).then(res => setGifById(res));
      getRelatedGifs(params as string).then(res => setRelatedGifs(res));
      getRelatedClips(params as string).then(res => setRelatedClips(res));
    }
  }, [params]);

  return <div>gifs</div>;
};

export default gifs;
