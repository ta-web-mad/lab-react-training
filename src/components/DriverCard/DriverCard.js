import React from 'react'
import IdCard from '../IdCard/IdCard'
import Rating from '../Rating/Rating'

export default function DriverCard({ name, rating, img, car }) {
    return (
        <div className="container-drive-car">
            <img src={img} />
            <div>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <span>{car.model}</span>
                <span>{car.licensePlate}</span>
            </div>

        </div>
    )
}
