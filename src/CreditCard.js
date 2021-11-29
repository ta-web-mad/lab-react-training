import React from 'react'
import './CreditCard.css'

const CreditCard = (props) => {
  return (
        <div className="creditCard" style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}>
            <p className="cardType">{props.type}</p>
            <p className="cardNumber">•••• •••• •••• {props.number.substr(-4)}</p>
            <div className="cardInfo">
                <p>Expires {props.expirationMonth}/{props.expirationYear % 2000}     {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
  )
}

export default CreditCard