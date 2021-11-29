import React from 'react'
import Rating from '../Rating/Rating'

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver">
      <img src={img} />
      <h3>{name}</h3>
      <Rating>{rating}</Rating>
      <p>{car.model} - {car.licensePlate}</p>
    </div>
  )
}

export default DriverCard
