
const colorToHex = (color) => {
  const hexadecimal = color.toString(16);
  return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}

const convertRGBtoHex = (red, green, blue) => {
  return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

export default convertRGBtoHex