import React from "react";



function CreditCard(props){

        let type

        switch (props.type) {
            case "Visa":
                type = '/img/visa.png'
                break;
            case "Master Card":
                type = '/img/master-card.svg'
                break;
            default:
                break;
        }

        let pickle = { 
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`
        }

    return(
        <div className='' style={pickle}>
                <p><img src={type} alt="credit" width='100px'/>{props.type}</p>
                <h5>{props.number}</h5>
                <h6>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</h6>
                <h6>{props.owner}</h6>
        </div>
       
        
        
       
    )

}

export default CreditCard;