import React from 'react'
import './IdCard.css'

const IdCard = (props) => {

  return (
    <article className="card">
          <img src={props.picture} />
        <div className="cardText">
          <p><strong>First Name</strong>: {props.firstName}</p>
          <p><strong>Last Name</strong>: {props.lastName}</p>
          <p><strong>Gender</strong>: {props.gender}</p>
          <p><strong>Heigth</strong>: {props.heigth}</p>
          <p><strong>Birthday</strong>: {props.birth.toDateString()}</p>
        </div>
    </article>
  )
}

export default IdCard;