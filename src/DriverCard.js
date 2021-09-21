import React from 'react';
import "./DriverCards.css";






function DriverCard(props) {

   let ratings; 
   if(props.rating >= 4){
       ratings = '★★★★☆'
   } 

    return (
        <div>
            <img className = "driver-image"  src={props.img} alt="img"></img> 
            <p className="rating">{ratings}</p> 
            <p className="car-info">{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}



export default DriverCard;