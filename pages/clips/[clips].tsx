import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { getClipById } from '../api/fetchAPI';

const Clips = () => {
  const router = useRouter();
  const { query } = router;
  const params = query.clips;

  const [clipById, setClipById] = useState<any>();

  useEffect(() => {
    if (params) {
      getClipById(params as string).then((res) => setClipById(res));
    }
  }, [params]);

  console.log(clipById);
  return <div>Clips</div>;
};

export default Clips;
