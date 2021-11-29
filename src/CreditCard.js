import React from 'react';
import './CreditCard.css';
import visa from './img/visa.png';
import mc from './img/master-card.svg';


const CreditCard = (props) => {
 let creditNumber = props.number.slice(-4);
    return (
        <div className="cc" style={{ backgroundColor: props.bgColor }}>
            <img src={props.type === 'Visa' ? visa : mc} style={{ width: 40 }} alt={props.type} />
            <div>
                <p> •••• / •••• / •••• / {creditNumber}</p>
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>

            </div>
        </div>
    )
}

export default CreditCard