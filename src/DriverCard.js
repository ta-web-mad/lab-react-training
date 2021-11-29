import React from 'react'
import './DriverCard.css'
import Rating from './Rating'

const DriverCard = (props) => {
    return (
        <div className="driverCard">
            <img src={props.img} alt={props.name}/>
            <div className="driverBody">
                <h2>{props.name}</h2>
                <Rating children={props.rating} />
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard