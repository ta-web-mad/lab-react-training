import React from 'react'
import '../styles/styles.css';

function BoxColor(props) {
    return (
      <div
        className="box-color"
        style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`}}
      >
        <span>
          rgb ({props.r}, {props.g}, {props.b})
        </span>
      </div>
    );
}

export default BoxColor
