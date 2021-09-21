import React from 'react'
// import visa from `${window.location.origin}+./visa.png`
import visa from '../../visa.png'
import mastercard from '../../master-card.svg'

export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return (
        <div className="container-card">
            {/* <Card bgColor={bgColor} color={color}> */}
            <div className="card" style={{ background: bgColor }}>
                <img src={type === 'Visa' ? visa : mastercard} alt="card credit" />
                <p>{number}</p>
                <span>Expires: {expirationMonth}/{expirationYear}</span> <span>{bank}</span>
                <p>{owner}</p>
            </div>
            {/* </Card> */}
        </div>
    )
}
