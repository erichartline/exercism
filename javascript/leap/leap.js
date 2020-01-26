export const isLeap = year => {
  const nonLeap = year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0);
  return nonLeap ? false : true;
};
