import React from 'react';
import './Style.css';

const BoxColor = (prop) => {
  let { r, g, b } = prop;

  return (
    <div
      className="box"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    >
      rgb({r},{g},{b})<br />
    </div>
  );
};

export default BoxColor;
