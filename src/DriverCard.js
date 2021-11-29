import React from 'react'
import './DriverCard.css'


const DriverCard = (props) => {

  return (
    <article className="driver-card">
        <img className="driverPic" src={props.img} alt={props.name} />
      <div>
        <p>{props.name}</p>
        <p>{props.rating}</p>
        <p>{props.car.model} - {props.car.licensePlate}</p>

      </div>
    </article>
  )
}

export default DriverCard