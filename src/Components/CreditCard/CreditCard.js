import React from 'react'
import './CreditCard.css'



const CreditCard = (props) => {

    
    const cardType = (type) => {
        switch (type){
        case "Visa":
        return "Visa"

        case "Master Card":
        return "Master Card"

        default:
        return
        }
    }
    
    return (
        <div style={{backgroundColor: props.bgColor, color: props.color}}>
            <h5>{cardType(props.type)}</h5>
            <p>{props.number}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )

}


export default CreditCard