import React from "react"
import "./creditCard.css"

function CreditCard(props) {
    let typeOfCard
    props.type === 'Visa' ? typeOfCard = 'img/visa.png' : typeOfCard = 'img/master-card.svg'

    let background = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    let creditNumbers = props.number.slice(-4)

    return (

        <div style={background} className="col-3 credid-cards">
            <img className="cardLogo" src={typeOfCard} alt={props.type} />
            <p>● ● ● ●  ● ● ● ●  ● ● ● ● {creditNumbers}</p>
            <p>{props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>


    )

}

export default CreditCard