import React from 'react'
import Rating from './Rating';
import './DriverCard.css'



const DriverCard = (props) => {
    return (
        <div className="DriverCard" >
            <div className="card">
                <div className="img">
                    <img src={props.img} alt={props.pictureName} />
                </div>

                <div className="body">
                    <h2>{props.name}</h2>
                    <Rating>{props.rating}</Rating>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}


export default DriverCard