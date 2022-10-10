const COLORS = ['#9933ff', '#00ccff', '#6157ff'];

export const getRandomColor = () => {
  const randomIdx = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIdx];
};

export default getRandomColor;
