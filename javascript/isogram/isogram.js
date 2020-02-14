export const isIsogram = str => {
  let isogram = true;
  const arr = str
    .split("")
    .filter(item => item !== "-")
    .filter(item => item !== " ");
  const newArr = [];
  arr.forEach(item => {
    const exists =
      newArr.includes(item.toLowerCase()) ||
      newArr.includes(item.toUpperCase());
    if (exists) {
      isogram = false;
    }
    newArr.push(item);
  });
  return isogram;
};
