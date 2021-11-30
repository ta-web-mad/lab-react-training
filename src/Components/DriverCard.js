import React from 'react';
import './Style.css';
import Rating from './Rating';

const DriverCard = (prop) => {
  return (
    <div className="Driver-Card">
      <img src={prop.img} alt="" />
      <div>
        <h2>{prop.name}</h2>
        <Rating>{prop.rating}</Rating>
        <p>
          {prop.car.model} - {prop.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
