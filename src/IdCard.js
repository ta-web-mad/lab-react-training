import React from 'react'
import './IdCard.css'


const IdCard = (props) => {

    return (
        <article className="IdCard">
            <div>
                <img src={props.picture} alt={props.name} />
            </div>
            <div>
                <p><strong>First name:</strong> {props.firstName}</p>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong> {props.birth.toDateString('')}</p>
            </div>

        </article>
    )
}

export default IdCard