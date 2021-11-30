import React from 'react';
import "./Random.css"


const Random = (props) => {

    return (
        <div className="Random">
            {Math.floor(Math.random() * (props.max - props.min)) + props.min}

        </div>)
}


export default Random;