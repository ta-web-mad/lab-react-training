import React from 'react'
import './BoxColor.css'

const divStyle = (r, g, b) => {
   return {
     backgroundColor: `rgb(${r}, ${g}, ${b})`,
   }
}

const BoxColor = (props) => {

  return (
    <article className="boxColor">
        <div class="box" style={divStyle(props.r, props.g, props.b)}>Box Color</div>
    </article>
  )
}


export default BoxColor;