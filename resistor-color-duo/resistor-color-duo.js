const colorCodes = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (colors) => {
  if (colors.length < 2) {
    throw new Error("At least two colors need to be present");
  }
  const resistorReducer = (values, color) => (values * 10) + colorCodes.indexOf(color);
  return colors.slice(0, 2).reduce(resistorReducer, 0);
};
