import React from 'react'
import './BoxColor'

const BoxColor = (props) => {
    const colorines = `rgb(${props.r},${props.g},${props.b})`
    return(<div style = {{backgroundColor: colorines}}><p>({props.r},{props.g},{props.b})</p></div>)

      }

export default BoxColor;
