import React from 'react';
import secretNumber from './utils/secret-number';
import './CreditCard.css'

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const hiddenCard = secretNumber(number)
    let image
    type === 'Visa' ? image = '../img/visa.png' : image = '../img/master-card.svg'

    return (
            <div className="card" style={{ backgroundColor: bgColor }}>
                <div className="img-left">
                    <img src={image} alt={type} />
                </div>
                <div>
                    {hiddenCard}
                </div>
                <div>
                    <p>Expires {expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <div>
                    <p>{owner}</p>
                </div>
            </div>

    )
}

export default CreditCard