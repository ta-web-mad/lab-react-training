import React from 'react';
import './IdCard.css'


const IdCard = (props) => {

  return (

    <article className="card">

      <img src={props.picture} alt="profile"/>

    <div className="personal-info">
      <p><strong> LastName: </strong>  {props.lastName}</p>
      <p><strong> FirstName: </strong>   {props.firstName}</p>
      <p><strong> Gender: </strong> {props.gender}</p>
      <p><strong> Height: </strong> {props.height}</p>
      <p><strong> Birth: </strong> {props.birth.toString().slice(0, 15)}</p>
    </div>
      
    </article>
  )
}

export default IdCard


