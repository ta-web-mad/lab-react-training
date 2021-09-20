import './BoxColor.css'
import React from 'react'

function BoxColor(props) {

let background  = `rgb(${props.r} ${props.g} ${props.b})`



return (
<p style={{background}}>rgb({props.r}{props.g}{props.b})</p>
)

    
}


export default BoxColor;