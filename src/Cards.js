import React from 'react'
import './Cards.css'


const Cards = (props) => {
  return ( 
  
    <article className="cards">
      <div className="img"> 
        <img src={props.picture} alt={props.name} />
      </div>  
      <div className="img">
        <p>Last name: {props.lastname}</p>
        <p>First name: {props.firstname}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height/100}m</p>
        <p>birth: {props.birth.toDateString()}</p>
      </div>
    </article>
  )
}

export default Cards

