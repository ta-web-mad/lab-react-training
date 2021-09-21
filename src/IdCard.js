import React from 'react';
import './IdCard.css'


const IdCard = (props) => {
    const { picture, firstName, lastName, gender, height, date } = props


    return (
        <div className="flex-container">
            <div>
                <img src={picture} alt={firstName} />
            </div>
            <div className="flex-container-info">

                <div className="flex-item">
                    <p className="bold">First Name:</p>
                    <p>{firstName}</p>
                </div>

                <div className="flex-item">
                    <p className="bold">Last name:</p>
                    <p>{lastName}</p>
                </div>

                <div className="flex-item">
                    <p className="bold">Gender:</p>
                    <p>{gender}</p>
                </div>

                <div className="flex-item">
                    <p className="bold">Height:</p>
                    <p>{height}</p>
                </div>

                <div className="flex-item">
                    <p className="bold">Birth:</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default IdCard