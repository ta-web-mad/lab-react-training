import React from "react";
import './BoxColor.css'

const BoxColor = ({r, g, b}) => {

    return <div className="colorbox" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`}}>rgb(${r}, ${g}, ${b})</div>
}

export default BoxColor;

// rgb(205, 92, 92)

//<BoxColor r={255} g={0} b={0} />
//<BoxColor r={128} g={255} b={0} />