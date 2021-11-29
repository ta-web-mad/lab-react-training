import React from "react";
// import "./Greetings.css"
import Random from "./Random";


const CreditCard = (props) => {

    <article>
        <p>{props.type}</p>
        
        <p>{props.number}</p>


        <div>
            <div>
                <p>{props.expirationMonth}</p>
                <p>{props.expirationYear}</p>
            </div>

            <div>
                <p>{props.bank}</p>
            </div>

        </div>



        <p>{props.owner}</p>
        <p>{props.color}</p>
    </article>

}

export default CreditCard