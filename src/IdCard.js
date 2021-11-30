import React from 'react'
import './IdCard.css'


const IdCard = (props) => {
    return (
        <article className="card">
            <div className="photo">
                <img src={props.picture} alt={props.name} />
            </div>
            <div className="text">
                <p>firstName: {props.firstName} </p>
                <p>lastName: {props.lastName}</p>
                <p>gender: {props.gender}</p>
                <p>height: {props.height/100}m</p>
                <p>birth: {props.birth.toDateString()}</p>
            </div>
        </article>
    )
}

export default IdCard