import React from 'react'
import Rating from './Rating.component'

function DriverCard(props) {
    return (
      <div className="driver-card" style={{ backgroundColor: '#455eb5' }}>
        <img src={props.img} alt=""></img>
        <div className="info-card">
          <h3>{props.name}</h3>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model}- {props.car.licensePlate}
          </p>
        </div>
      </div>
    );
}

export default DriverCard
