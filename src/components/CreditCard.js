import React from 'react';
import './CreditCard.css'

const CreditCard = props => {
    const cardStyle = {
        backgroundColor: props.bgColor
    }

    let logo
    if(props.type === 'Visa'){
        logo = './img/visa.png'
    } else {
       logo =  './img/master-card.svg'
    }

    let code = '**** **** ****' + props.number

return (
    <div>
         <div className="creditCard" style = {cardStyle}>
            <img src={logo}></img>
            <div className = "numberOfTheCard">{props.code}</div>
            <p className="credit">Expires {props.expirationMonth} / {props.expirationYear} {props.bank}</p>
            <p className="credit"> {props.owner}</p>
        </div>
    </div>
)
}

export default CreditCard