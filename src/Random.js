import React from 'react';

const Random = (props) => {

    function randomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

   
    return (

        <article>
            
            <h1> Random value Between {Math.floor(randomValue(props.max, props.min))} </h1>

        </article>
    )
}

export default Random