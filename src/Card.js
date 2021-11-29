import React from 'react'
import './Card.css'


const Card = (props) => {

  return (
    <article className="card">
        <img src={props.picture} alt={props.name} />
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toString()}</p>

      </div>
    </article>
  )
}

export default Card