import React from 'react';
import './Random.css'

const Random = (props) => {  
    let result =  Math.floor( (Math.random() * (props.max) - (props.min) + props.min))  
    return (<div className='Random'>Random value between {props.max} and {props.min} = {result}</div>)

}


export default Random

