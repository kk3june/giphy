import FetchAPI from './fetchAPI';

const fetchContent = async (name: string) => {
  try {
    const res = await FetchAPI(
      `/${name}/trending?api_key=RqsM2YqZIBX1z7mAkpHMkyhGQpaCvEiG`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchContent;
