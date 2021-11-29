import React from 'react'
import './BoxColor.css'


const BoxColor = (props) => {


    return (
        
        <article style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})`}} className="BoxColor">

            <p>{props.r}</p>
            <p>{props.g}</p>
            <p>{props.b}</p>


        </article>
    )
}

export default BoxColor