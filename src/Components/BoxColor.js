import React from 'react';

function BoxColor(props) {
  const r = props.r;
  const g = props.g;
  const b = props.b;
  function RGB2HTML(red, green, blue) {
    var decColor = 0x1000000 + blue + 0x100 * green + 0x10000 * red;
    return '#' + decColor.toString(16).substr(1);
  }
  function color() {
    return `rgb(${r},${g},${b})`;
  }
  return (
    <div className="BoxColor" style={{ backgroundColor: color() }}>
      <div>
        rgb({r},{g},{b})
      </div>
      <div>{RGB2HTML(r, g, b)}</div>
    </div>
  );
}

export default BoxColor;
