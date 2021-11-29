import React from 'react'
import './BoxColor.css'



const BoxColor = (props) => {

    const style = `rgb(${props.r}, ${props.g}, ${props.b})` 

    function RGBToHex(r,g,b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
      
        if (r.length == 1)
          r = "0" + r;
        if (g.length == 1)
          g = "0" + g;
        if (b.length == 1)
          b = "0" + b;
      
        return "#" + r + g + b;
      }


    const hexColor = RGBToHex(props.r, props.g, props.b)

    return (
        <div style={{backgroundColor: style}}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{hexColor}</p>
        </div>
    )

}


export default BoxColor