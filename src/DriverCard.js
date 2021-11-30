import React from 'react';
import './DriverCard.css'
import './DriverCard.css'
import Rating from './Rating';


const DriverCard = (props) => {

  return (

    <article className="driver-card">

    
      <img src={props.img} alt="profile"/>
    

    <div className="info">
      <p>{props.name}</p>
      <Rating>{props.rating}</Rating>
      <p> {props.car.model} - {props.car.licensePlate}</p>
     
    </div>
      
    </article>
  )
}

export default DriverCard