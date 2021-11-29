import React from 'react';
import './BoxColor.css';
const getRGB = (r, g, b) => {
  return { backgroundColor: `rgb(${r}, ${g}, ${b})` };
};
const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};
const getHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
const BoxColor = (props) => {
  return (
    <div className="boxColor" style={getRGB(props.r, props.g, props.b)}>
      rgb({props.r},{props.g},{props.b}){getHex(props.r, props.g, props.b)}
    </div>
  );
};
export default BoxColor;
