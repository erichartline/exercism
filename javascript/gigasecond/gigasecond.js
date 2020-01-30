export const gigasecond = date => {
  const seconds = date.getTime() / 1000;
  const gigasecond = 10 ** 9;
  const total = seconds + gigasecond;
  return new Date(total * 1000);
};
