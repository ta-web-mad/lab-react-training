import React from 'react';
import './Random.css';
const random = (max, min) => {
  return '=> ' + Math.floor(Math.random() * (max - min + 1) + min);
};
const Random = (props) => {
  return (
    <div className="random">
      <p>
        Random value between {props.min} and {props.max}
        {random(props.max, props.min)}
      </p>
    </div>
  );
};
export default Random;
