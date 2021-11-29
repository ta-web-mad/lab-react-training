import React from "react";
import "./IdCard.css"


const IdCard = (props) => {

    return (
        <article className="card">
            <header>
                <img className="img" src={props.picture} alt={props.name} />

            </header>

            <div>
                <p>Last name: <span>{props.lastName}</span></p>
                <p>First name: <span>{props.firstName}</span></p>
                <p>Gender: <span>{props.gender}</span></p>
                <p>Height: <span>{props.height}</span></p>
                <p>Birthday: <span>{props.birth}</span></p>
            </div>
            
        </article>
    )



}

export default IdCard