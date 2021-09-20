import React from "react"
import "./driverCard.css"

function DriverCard(props) {
    let ratings

    props.rating < 4.5 ? ratings = '★★★★☆' : ratings = '★★★★★'

    return (
        <div className="driver-card">
            <div className="driver-info row">
                <div className="col-6">
                    <img className="driver-img" src={props.img} alt={props.name} />
                </div>
                <div className="col-6">
                    <p className="driver-name">{props.name}</p>
                    <p>{ratings}</p>
                    <p>{props.car.model} {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}

export default DriverCard