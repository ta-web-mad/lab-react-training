import React from "react";
import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }
    return (
        <div style={style} className="boxStyle">
            <p>rgb({r},{g},{g})</p>
        </div>

    )
}

export default BoxColor