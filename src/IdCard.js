import React from 'react';
import "./IdCard.css"

const Idcard = (props) => {
    return (

        <div className="cards">

            <div>
                <img src={props.picture} alt={props.lastName} />
            </div>

            <div>
                <p><strong>lastName:</strong> {props.lastName}</p>
                <p><strong>firstName:</strong> {props.firstName}</p>
                <p><strong>gender:</strong> {props.gender}</p>
                <p><strong>height:</strong> {props.height/100}m</p>
                <p><strong>birth:</strong> {props.birth.toDateString('')}</p>
            </div>

        </div>

    )
}
export default Idcard;