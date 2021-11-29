import React from 'react'
import '../css/idCard.css'


const idCard = (props) => {
  const date = `${props.birth}`.slice(0,15);
  return (
    <article className="card">
        <img src={props.picture} alt={props.firstName} />
        <div>
            <p><strong>LastName:</strong>  {props.lastName}</p>
            <p><strong>FirstName:</strong> {props.firstName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height:</strong> {props.height}</p>
            <p><strong>Birth:</strong> {date}</p>
            {/* <p>Birth: {props.birth.toString()}</p> */}
        </div>
      
    </article>
  )
}

export default idCard