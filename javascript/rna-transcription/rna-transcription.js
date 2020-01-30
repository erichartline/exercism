const transcribedRNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

export const toRna = str => {
  let result = "";
  for (const l of str) {
    result += transcribedRNA[l];
  }
  return result;
};
