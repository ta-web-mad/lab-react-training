import React from "react";

const IdCard = (props) => {
    return (
        <div>
            <img src={props.picture} alt={props.alt} />
            <p>Last name: {props.lastName}</p>
            <p>First name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}m</p>
            <p>Birthday: {props.Birthday}</p>
        </div>
    )
}
export default IdCard