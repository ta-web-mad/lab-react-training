import React from 'react';
import './BoxColor.css';

const BoxColor = ({r,g,b}) => {

    return <div className="colorBox" style={{ backgroundColor:`rgb(${r},${g},${b})` }} />

}


// rgb(567,658,688)

// ${}

export default BoxColor;