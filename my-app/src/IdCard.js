import React from 'react'
import './IdCard.css'


const IdCard = (props) => {

  return (
    <article className="IdCard">
        <p>LastName {props.lastName}</p>
        <p>FirstName {props.firstName}</p>
      <div>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toString().slice(0, 16)}</p>
        <img src={props.picture} alt={props.firstname}/>
      </div>
    </article>
  )
  
}



export default IdCard