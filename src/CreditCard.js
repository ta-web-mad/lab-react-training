import React from 'react';
import "./CreditCards.css";






function CreditCards(props) {
    let typeOfCard
    props.type === 'Visa' ? typeOfCard = 'img/visa.png' : typeOfCard = 'img/master-card.svg' 

    let background = {
        backgroundColor: `${props.bgColor}`, 
        color: `${props.color}`
    }
 
     let creditDigits = props.number.slice(-4); 
    return (
       <div style = {background} className = "credit-cards">
       <img  className = "logo" src={typeOfCard} alt={props.type}></img>  
       <p> *******{creditDigits}</p>
       <p>{props.expirationMonth}/{props.expirationYear}</p> 
       <p>{props.bank}</p>
       <p>{props.owner}</p>
       </div>

    )
}



export default CreditCards; 




