import React from 'react';
import "./Random.css"; 






function Random(props) {
    let count = Math.floor(Math.random(props.min) * (props.max - props.min) + (props.min));
    return (
        <div className = "container"> 
       
            <p>Random value between {props.min} and {props.max}  is  {count}; </p>
        </div>
    )
}




export default Random;