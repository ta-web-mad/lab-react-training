import React from 'react'
import './IdCard.css'


const IdCard = (props) => {

    


    return (
        <article className="IdCard">
            
            <img src={props.picture} alt={props.name} />
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.birth.toUTCString()}</p>
            
               
               
            
           
        </article>
    )
}

export default IdCard