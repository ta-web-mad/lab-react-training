import React from 'react';
import "./IdCards.css"

const Idcard = (props) => {
    return (

        <div className="row cards">

            <div className="col-3">
                <img src={props.picture} alt={props.lastName} />
            </div>

            <div className="col-9">
                <p><strong>lastName:</strong> {props.lastName}</p>
                <p><strong>firstName:</strong> {props.firstName}</p>
                <p><strong>gender:</strong> {props.gender}</p>
                <p><strong>height:</strong> {props.height}</p>
                <p><strong>birth:</strong> {props.birth.toLocaleDateString('en-GB')}</p>
            </div>

        </div>

    )
}
export default Idcard;