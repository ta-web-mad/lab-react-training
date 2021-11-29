import React from 'react'
import './Random.css'

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Random = (props) => {

    return (
        <div className="Random">
            <p>Random value between {props.min} and {props.max} => {randomIntFromInterval(props.min, props.max)}</p>
        </div>
    )
}

export default Random