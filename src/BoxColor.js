import React from 'react'
import './BoxColor.css'

function rgbConverter(r,g,b) {
    return "#"+r+g+b;
}

const BoxColor = (props) => {

    return (
        <div className="BoxColor" style={{
            backgroundColor: `rgb(${props.r},${props.g},${props.b})`, color: props.color
        }}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbConverter(props.r, props.g, props.b)}</p>
        </div>
    )
}


export default BoxColor