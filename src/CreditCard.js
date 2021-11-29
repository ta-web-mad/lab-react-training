import React from 'react'
import './CreditCard.css'
function lastDigits(number, digits) {
    const stringNumber = number.toString();
    const lastDigits = stringNumber.substr(stringNumber.length - digits);
    return lastDigits
}

const CreditCard = (props) => {
    return (
        <div className="CreditCard" style={{
            backgroundColor: props.bgColor, color: props.color
        }}>
            <div className="img">
                <img src={props.type === "Visa" ? "./img/visa.png" : "./img/master-card.svg"} alt=""></img>
            </div>
            <p className="Account">•••• •••• •••• {lastDigits(props.number, 4)}</p>
            <div>
                <p>Expires {props.expirationMonth}/{lastDigits(props.expirationYear, 2)} {props.bank}</p>
                <p>{props.owner}</p>
            </div>

        </div>
    )
}


export default CreditCard