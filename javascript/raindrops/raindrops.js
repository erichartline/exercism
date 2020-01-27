export const convert = num => {
  let word = "";
  if (num % 3 === 0) {
    word += "Pling";
  }
  if (num % 5 === 0) {
    word += "Plang";
  }
  if (num % 7 === 0) {
    word += "Plong";
  }
  if (word === "") {
    return String(num);
  }
  return word;
};
