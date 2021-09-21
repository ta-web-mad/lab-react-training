import React from 'react';
import './CreditCard.css';
const CreditCard = (props) => {


    const divStyle = {

        backgroundColor: (props.bgColor)
    };

    return (

        <div >
            <p class='CreditCardItems' style={divStyle}>
                {props.number}
                {' '}
                Expires
                {props.expirationMonth}
                /{props.expirationYear}
                {props.owner}
                {props.bank}
                <img src='../img/master-card.svg'
                    alt="card-img" />
                <img src='../img/visa.png'
                    alt="card-img" />
            </p>
        </div>
    )

}

export default CreditCard