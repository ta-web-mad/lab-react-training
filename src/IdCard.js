import React from 'react';
import './IdCard.css';

const IdCard = (props) => {

    return (

        <article
            className={'horizontal'}
        >
            <div>
                <img src={props.picture} alt="card-img" />
            </div>
            <div>
                <h2>first name: {props.firstName}</h2>
                <h2>last name: {props.lastName}</h2>
                <h2>Gender: {props.gender}</h2>
                <h2>Height: {props.height}</h2>
                <h2>Birth: {props.birth.toDateString()}</h2>
            </div>
        </article>
    )
}

export default IdCard