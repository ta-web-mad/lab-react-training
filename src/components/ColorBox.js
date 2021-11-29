import React from 'react'
import '../css/colorBox.css'


const ColorBox = (props) => {
    let red = Math.floor(Math.random() * 255)
    let r = red.toString()
    let green = Math.floor(Math.random() * 255)
    let g = green.toString()
    let blue = Math.floor(Math.random() * 255)
    let b = blue.toString()
 
    let red2 = Math.floor(Math.random() * 255)
    let rojo = red2.toString()
    let green2 = Math.floor(Math.random() * 255)
    let verde = green2.toString()
    let blue2 = Math.floor(Math.random() * 255)
    let azul = blue2.toString()
    
    // function colorRGB2Hex(color) {
    //     var rgb = color.split(',');
    //     var r = parseInt(rgb[0].split('(')[1]);
    //     var g = parseInt(rgb[1]);
    //     var b = parseInt(rgb[2].split(')')[0]);
    
    //     var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
         
    // } NO HE SABIDO IMPLEMENTAR COLOR HEXAGESIMAL!!!!!
     

  return (
    <>
        <div className="coloBox-cont">
            <div style={{ backgroundColor: `rgb(${r},${g},${b})`}}> 
                <p>rgb({r},{g},{b})</p>
                <p></p>
            </div>
        </div>
        <div className="coloBox-cont">
            <div style={{ backgroundColor: `rgb(${rojo},${verde},${azul})`}}> 
                <p>rgb({rojo},{verde},{azul})</p>
                <p></p>
            </div>
        </div>
    </>
  )
}

export default ColorBox 