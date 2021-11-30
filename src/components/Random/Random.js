import React from 'react';
import './Random.css';

const Random = (props) => {
  const { min, max } = props;
  const randomNumber = (minVal, maxVal) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <p className="random">
      Random value between {min} and {max} ➡️ {randomNumber(min, max)}
    </p>
  );
};

export default Random;
