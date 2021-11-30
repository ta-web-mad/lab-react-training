import React from 'react';
import './IdCard.css';



const IdCard = (props) => {

  return (
    <article className="etiqueta">
        <div className="divEtiqueta">
          <img src={props.picture} alt={props.firstName}/>  
        </div>
        <div className="divEtiqueta">
          <p><span>First Name:</span>{props.firstName}</p>
          <p><span>Last Name:</span>{props.lastName}</p>
          <p><span>Gender:</span> {props.gender}</p>
          <p><span>Height:</span> {props.height/ 100}m</p>
          <p><span>Birth:</span> {props.birth.toDateString()}</p>
        </div>
          
    </article>
  )
}

export default IdCard

