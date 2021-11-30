import React from 'react'
import './IdCard.css'


const IdCard = (props) => {

  const capitalize = (name) => name[0].toUpperCase() + name.slice(1)
  
  return (
    <article className="card">
    <img src={props.picture} alt={props.name} />
      <header>
        <p>Last name: {capitalize(props.lastName)}</p>
        <p>First name: {capitalize(props.firstName)}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height/100}m</p>
        <p>birth: {props.birth.toDateString()}</p>
        
      </header>
    </article>
  )
}

export default IdCard