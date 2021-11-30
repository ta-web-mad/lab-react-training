import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const car = props.car;
  return (
    <div className="CardDriver">
      <div>
        <img className="DriverImg" src={props.img} />
      </div>
      <div>
        <p className="TitleDriver">{props.name}</p>
        <div className="RatingDriver">
          <Rating>{props.rating}</Rating>
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
