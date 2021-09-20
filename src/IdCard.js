import React from "react"
import "./IdCard.css"

function Students(props) {
    return (
        <div className="row student">
            <div className="col-2">
                <img src={props.picture} alt={props.firstName} />
            </div>
            <div className="col-10">
                <p><strong>First Name: </strong> {props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height} </p>
                <p><strong>Birth: </strong>{props.birth.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Students