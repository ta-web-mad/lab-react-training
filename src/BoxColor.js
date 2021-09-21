import React from 'react';
import "./boxColor.css";






function BoxColor(props) { 

    let background = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }
   
    return (
    <div>
      <p className="colors" style={background}>rgb({props.r},{props.g},{props.b})</p>
    </div>

        
    )
}



export default BoxColor;