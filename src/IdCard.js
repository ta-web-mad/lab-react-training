import React from 'react'
import './IdCard.css'

const IdCard = (props) => {
  return (
        <div className="idCard">
            <img src={props.picture} alt={props.firstName} />
            <div className="cardBody">
                <p><strong>First name</strong>: {props.firstName}</p>
                <p><strong>Last name</strong>: {props.lastName}</p>
                <p><strong>Gender</strong>: {props.gender}</p>
                <p><strong>Height</strong>: {Math.round((props.height/100) * 100) / 100}m</p>
                <p><strong>Birth</strong>: {props.birth.toDateString()}</p>
            </div>
        </div>
  )
}

export default IdCard