import React from 'react';
import './DriverCard.css';
import Rating from './Rating';

const DriverCard = (props) => {  
    
    return (<div className='Drive'>
    <img class='imagen' src={props.img} alt={props.name} />
    <div>{props.name}
    <Rating>{props.rating}</Rating>
    <p>{props.car.model} - {props.car.licensePlate}</p>
    </div>
    </div>)

}

export default DriverCard