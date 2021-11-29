import React from 'react'
import '../styles/styles.css';

function Random(props) {

    let number = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    return (
        <div className="random-card">
            <p>Random value between {props.min} and {props.max} -- {number}</p>


        </div>
    )
}

export default Random
