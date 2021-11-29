import React from 'react';
import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  const rgbStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div style={rgbStyle} className="box-color">
      <p>
        rgb({r},{g},{b})<br></br>
      </p>
    </div>
  );
};

export default BoxColor;
