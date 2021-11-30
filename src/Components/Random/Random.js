import React from 'react';
import './Random.css'

const firstNum = Math.floor(Math.random() * 6) + 1
const secondNum = Math.floor(Math.random() * 100) + 1

function Random(props) {
  return (
      <>
    <div className="box IdCard">
    <p className="IdCard">Random Value between 1 and 6 : {firstNum}</p>
    </div>
    <div className="box IdCard">
    <p className="IdCard">Random Value between 1 and 6 : {secondNum}</p>
    </div>
    </>
  );
}

export default Random;