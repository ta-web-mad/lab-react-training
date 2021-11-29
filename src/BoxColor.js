import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {  
    let red= props.r;
    let green = props.g;
    let blue = props.b;
    
    return (<div className="Box-color" style={{backgroundColor:`rgb(${red},${green},${blue})`} } > rgb ({red}, {green}, {blue})
        </div>)
}


export default BoxColor

