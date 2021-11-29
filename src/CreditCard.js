import React from "react";
import './CreditCard.css'

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props



    let bankLogo = (type) => {
        switch (type) {
            case 'Visa':
                return '/img/visa.png'
                break;

            case 'Master Card':
                return '/img/master-card.svg'
                break;

        }
    }

    const hidenPass = (string) => {
        let showPass = string.slice(-4).padStart(16, "•")
        return showPass.substring(0, 4) + ' ' + showPass.substring(4, 8) + ' ' + showPass.substring(8, 12) + ' ' + showPass.substring(12, 16)
    }

    const cardStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
    return (

        <div className="credit-card" style={cardStyle}>
            <div className="first-row">
                <img className="bank-logo" src={bankLogo(type)} alt={`${type} logo`}></img>
            </div>
            <p className="card-number"> {hidenPass(number)} </p>
            <div className="client-info">
                <p>Expires {expirationMonth.toString().padStart(2, '0')} / {expirationYear} <span className="bank-name"> {bank} </span> </p>
                <p>{owner}</p>
            </div>
        </div>
    )
}
export default CreditCard