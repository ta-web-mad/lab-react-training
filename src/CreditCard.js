import React from 'react';
import './CreditCard.css';
import visapic from './img/visa.png';
import mcpic from './img/master-card.svg';


const CreditCard = (props) => {

  return (
    <div className="cc" style={{ backgroundColor: props.bgColor }}>
        <img src={props.type === 'Visa' ? visapic : mcpic } style={{ width:40 }} alt={props.type} />
      <div>
        <p>{props.number}</p>
        <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>

      </div>
    </div>
  )
}

export default CreditCard;