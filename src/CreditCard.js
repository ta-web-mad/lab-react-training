import React from 'react';
import './CreditCard.css';



const CreditCard = (props) => {
   let tarjeta;

   if(props.type === "Visa") {

    tarjeta = <img src="/img/visa.png" alt="visa" width="50px" height="20px" />
   } else if (props.type === "Master Card"){
    tarjeta = <img src="/img/master-card.svg" alt="master-card" width="50px" height="30px"/>
   }

  return (
    <div className="card" style={{backgroundColor: props.bgColor, color:props.color}}>
        {tarjeta}

        <div className="info">
            <h2>**** **** ****{(props.number).substr(-4)}</h2>
            <p>Expires: {props.expirationMonth} / {(props.expirationYear.toString()).substr(-2)}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
     
        </div>
        
          
          
    </div>
  )
}

export default CreditCard

