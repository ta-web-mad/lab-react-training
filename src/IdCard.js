import React from 'react';
import"./IdCard.css"

function IdCard(props) {
    return (
        <article>
        <h3>First name: {props.firstName}</h3>
        <h3>Last name: {props.lastName}</h3>
        <h3>Gender: {props.gender}</h3>
        <h3>Height: {props.height}</h3>
        <h3>Birth: {props.birth.toLocaleString()}</h3>
        <h3>{props.picture}</h3>
        </article>
    )

}

export default IdCard;