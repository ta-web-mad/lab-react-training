import React from 'react'
import './IdCard.css'


const IdCard = (props) => {

    return (
        <div className="card">

            <div>
                <img className="card-img" src={props.picture} alt={props.picture}></img>
            </div>

            <div className="card-info">
                <div className="card-txt">
                    <h4>First Name</h4>
                    <p>{props.firstName}</p>
                </div>

                <div className="card-txt">
                    <h4>Last Name</h4>
                    <p>{props.lastName}</p>
                </div>

                <div className="distribution card-txt">
                    <div>
                        <h4>Gender</h4>
                        <p>{props.gender}</p>
                    </div>

                    <div>
                        <h4>Height</h4>
                        <p>{props.height}m</p>
                    </div>
                </div>

                <div className="card-txt">
                    <h4>Birth</h4>
                    <p>{props.date.toString().slice(0,15)}</p>
                </div>
            </div>

        </div>
    )
}

export default IdCard