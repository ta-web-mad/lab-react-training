import React from 'react'
import './DriverCard.css'
import Rating from '../Rating/Rating'



const DriverCard = (props) => {
    
    return (
        <div>
            <div>
                <img src={props.img}></img>
            </div>
            <div>
                <div>
                    <h2>{props.name}</h2>
                </div>
                <div>
                    <Rating children={props.rating}></Rating>
                </div>
                <div>
                    <p>{props.car.model}</p>
                    <p>{props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )

}


export default DriverCard