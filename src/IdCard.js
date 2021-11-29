import React from 'react';
import './IdCard.css'


const IdCard = (props) => {

  return (

    <article className="card">

    <div className="picture">
      <img src={props.picture}/>
    </div>

    <div className="personal-info">
      <p>{"LastName: "} {props.lastName}</p>
      <p>{"FirstName: "} {props.firstName}</p>
      <p> Gender: {props.gender}</p>
      <p> Height: {props.height}</p>
      <p> Birth: {props.birth.toString().slice(0, 15)}</p>
    </div>
      
    </article>
  )
}

export default IdCard


