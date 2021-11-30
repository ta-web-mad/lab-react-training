import React from 'react';
import Rating from './Rating';
import './DriverCard.css';



const DriverCard = (props) => {
 
    return (
      <div >
       
       <img src={props.img} alt="img" width="150px"/>
       <div>
       {props.name}
        <Rating>{props.rating}</Rating>
        {props.car.model}
        {props.car.licensePlate}
       </div>
        
      </div>
    );
  };
  export default DriverCard;


