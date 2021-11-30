import React from 'react';

function Random(props) {
  let max = props.max;
  let min = props.min;
  function random() {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <div>
      Random value between {props.min} and {props.max} = {random()}
    </div>
  );
}

export default Random;
