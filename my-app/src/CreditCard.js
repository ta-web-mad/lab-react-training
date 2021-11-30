import React from 'react'
import './CreditCard'
import Visa from './img/visa.png'
import MasterCard from './img/master-card.svg'


const CreditCard = (props) => {

    return (
        <div className="creditcard" style= {{backgroundColor:props.bgColor, color:props.color}}>
        <img src={props.type === "Visa" ? Visa : MasterCard}></img>
        <p>{props.number}</p>
        <p>{props.expirationMonth}/{props.expirationYear}</p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;
