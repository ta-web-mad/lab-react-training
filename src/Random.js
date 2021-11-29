import React from 'react'
import './Random.css'


const Random = (props) => {

    console.log(props);

    return (
        <article className="Random">

            <p>Random value between {props.mim} and {props.max} = {Math.floor(Math.random() * (props.max - props.min)) + props.min}</p>


        </article>
    )
}

export default Random