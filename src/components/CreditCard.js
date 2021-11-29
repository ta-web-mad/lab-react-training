import React from 'react'
import '../css/creditCard.css'
 

const CreditCard= (props) => {
     
    const number = `${props.number}`.slice(12);
    const num = `···· ···· ···· ${number}`
     

  return (
    <>
    <section>
        <div className="creditCard" style={{backgroundColor: props.bgColor, color: props.color }}>
            <span>{props.type}</span>
            
            <p className="digits"> {num} </p>
            <p>
                <span>Expires {props.expirationMonth}/{props.expirationYear}</span>
                <span>{props.bank}</span>
            </p>
            <p>{props.owner}</p>
            
        </div>
    </section>
        
    </>
  )
}

export default CreditCard 