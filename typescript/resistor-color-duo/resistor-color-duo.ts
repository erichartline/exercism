const colorCode = (color: string) =>
  colorsList.findIndex(item => item === color);

const colorsList = [
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

export class ResistorColor {
  private colors: string[];
  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }
  value = (): number =>
    +`${colorCode(this.colors[0])}${colorCode(this.colors[1])}`;
}
