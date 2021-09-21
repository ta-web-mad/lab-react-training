import React from 'react';
import convertRGBtoHex from './utils/rgbToHex'
import './BoxColor.css'

const BoxColor = (props) => {
    const { r, g, b } = props
    const hexa = convertRGBtoHex(r, g, b)
    const boxColor = {
        backgroundColor: hexa
    }

    return (
        <div className="color-box" style={boxColor} >
            <div>
                <p>rgb({r},{g},{b})</p>
            </div>
            <div>
                <p>{hexa}</p>
            </div>
        </div>
    )
}

export default BoxColor