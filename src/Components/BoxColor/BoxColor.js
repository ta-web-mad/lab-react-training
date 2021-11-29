import React from 'react'

function BoxColor({ r, g, b }) {
  let hex = rgbToHex(r, g, b)
  //To Adjust the contrast always visable:
  let textcolor = setForegroundColor([r, g, b])
  return (
    <div className="withborder textCenter" style={{ with: "100%", height: "150px", backgroundColor: `rgb(${r},${g},${b})`, fontSize: "2rem", color: `${textcolor}` }}>
      <p> `rgb(${r},${g},${b})` </p>
      <p>{hex}</p>
    </div>
  )
}

export default BoxColor
//Helpers :
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function setForegroundColor(rgb) {
  var sum = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
  return (sum > 128) ? 'black' : 'white';
}

