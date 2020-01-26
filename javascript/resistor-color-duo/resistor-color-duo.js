const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

const colorCode = color => COLORS.findIndex(item => item === color);

export const decodedValue = colorArr =>
  +`${colorCode(colorArr[0])}${colorCode(colorArr[1])}`;
