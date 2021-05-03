import React from 'react';
import './IdCard.css'

const IdCard = props => {

    return (
        <div className="card">
            <img class='cardImage' src={props.picture} alt='alt'/>
            <div class='cardData'>
                <p class='cardInfo'> <strong>First name:</strong> {props.firstName}</p>
                <p class='cardInfo'><strong>Last name:</strong> {props.lastName}</p>
                <p class='cardInfo'><strong>Gender:</strong>{props.gender}</p>
                <p class='cardInfo'><strong>Height:</strong> {props.height}</p>
                <p class='cardInfo'><strong>Birth:</strong>{props.birth}</p>
            </div>
        </div>
    )
}
export default IdCard