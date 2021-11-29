import React from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css';
const DriverCard = (props) => {
  return (
    <div className="driverCard">
      <img src={props.img} alt="" />
      <div className="content">
        <h1>{props.name}</h1>
        <Rating className="rating" children={props.rating} />
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};
export default DriverCard;
