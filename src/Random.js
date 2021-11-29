import React from 'react'
import './Random.css';

function Random(props) {
    return (
      <p className="card">
        Random value between {props.min} and {props.max} is = {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min};
      </p>
    );
  }


export default Random;