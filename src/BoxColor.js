import React from 'react'
import './BoxColor.css';

const BoxColor = ({r,g,b}) => {

        return <div className="colorBox" style={{ backgroundColor: `rgb(${r},${g},${b})`}}>rgb(${r},${g},${b})</div>
  }

export default BoxColor;