import React from 'react';
import './DriverCard.css'
import Rating from '../Rating/Rating'


function DriverCard(props) {
  return (
    <div className="DriverCard">
    <p className="">{props.name}</p>
    <Rating>{props.rating}</Rating>
    <img src={props.img} className="" alt="---" />
    <p className="">{props.car.model} </p>
    <p className="">{props.car.licensePlate} </p>

    </div>
  );
}

export default DriverCard;