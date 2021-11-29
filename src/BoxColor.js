import React from 'react'
import './BoxColor.css'

const BoxColor = (props) => {
    return <p className='colorBox' style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}>rgb({props.r},{props.g},{props.b})</p>
}

export default BoxColor