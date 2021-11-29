import React from 'react';
import './CreditCards.css';
import visa from './img/visa.png';
import master from './img/master-card.svg';


const CreditCards = (props) => {

  let card;

  if(props.type === 'Visa'){
    card = <img src = {visa} alt= "visa" style= {{ width: 75}}></img>
  } else {
    card = <img src ={master} alt= "master" style= {{ width: 75}}></img>
  }
  return (
    <div className= "creditcard" style={{ backgroundColor: props.bgColor }}>
    <p>{card}</p>
    <p>*********{(props.number).substr(-4)}</p>
    <p>Expires {props.expirationMonth} / {props.expirationYear}</p>
    <p>{props.bank}</p>
    <p>{props.owner}</p>
    
    </div>
  )
}

export default CreditCards

// type: A string that can be "Visa" or "Master Card"
// number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card