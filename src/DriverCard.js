import React from 'react';
import './DriverCard.css';
import Rating from './Rating';

const DriverCard = (props) => {

    return (
        <article className='driver-card'>
            
            <img className="img-driver" src={props.img} alt="Driver card" />
           
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>
                    <p>{props.car.model} </p>
                    -
                    <p> {props.car.licensePlate}</p>
                </p>
            
        </article>
    )
}

export default DriverCard;