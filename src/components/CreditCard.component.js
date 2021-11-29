import React from 'react'

function CreditCard(props) {
    return (
      <div className="credit-card" style={{ backgroundColor: props.bgColor, color: props.color }}>
        <h3>{props.type}</h3>
        <p className="number-card">
          **** **** **** {props.number.substr(12, 14)}
        </p>
        <div className="atributes">
          <span>
            Expires : {props.expirationMonth} / {props.expirationYear}
          </span> <br></br>
          <span>{props.owner}</span>
        </div>
      </div>
    );
}

export default CreditCard
