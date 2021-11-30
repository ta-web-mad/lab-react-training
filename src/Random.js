import React from 'react';
import './Random.css';

const Random = (props) => {
    let numNew;
    numNew = Math.floor(Math.random() * props.max) + props.min
    return (<div className="randomDiv"> Random value between  {props.min} and {props.max} = {numNew}
        </div>)
    }
export default Random;

