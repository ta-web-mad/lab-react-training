import React from 'react';
import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  const rgbStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  const numToHex = (num) => num.toString(16).padStart(2, '0');
  const rgbToHex = (r, g, b) => '#' + numToHex(r) + numToHex(g) + numToHex(b);

  return (
    <div style={rgbStyle} className="box-color">
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
