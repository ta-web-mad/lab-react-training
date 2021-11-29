import React from 'react';
import './CreditCard.css'

const typeCard = (type) => {
    switch (type){
    case 'Visa':
        return "../img/visa.png"

    case 'Master Card':
        return "../img/master-card.svg"

     default:
        return "../img/master-card.svg"
    }
}

const hideNumber = (string) => {
    return string.substr(-4);
}

const CreditCard = (props) => {

  return (


        <div className="creditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
        
        <img src={typeCard(props.type)} alt="credit-card" />
        <p>•••• •••• •••• {hideNumber(props.number)}</p>
        <p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
        
        <p>{props.owner}</p>

        </div>
   

    

  )
}

export default CreditCard