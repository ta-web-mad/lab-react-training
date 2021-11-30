import React from 'react';
import './BoxColor.css'


const Random = (props) => {

  return (

    <p className="box" style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}> rgb({props.r})({props.g})({props.b})</p>
      
  )
}

export default Random