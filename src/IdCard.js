import React from 'react';
import "./IdCard.css";

function IdCard(props) {

  return (
    <section className='id-card'>
    <div>
      <img src={props.picture} alt='foto-perfil'></img>
    </div>
     <div>
        <p><strong>First name:</strong>{props.firstName}</p>
        <p><strong>Last name: </strong>{props.lastName}</p>
        <p><strong>Gender: </strong>{props.gender}</p>
        <p><strong>Height: </strong>{props.height}</p>
        <p><strong>Birth: </strong>{props.birth}</p>
     </div>
    </section>
  )
}

export default IdCard;