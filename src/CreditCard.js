import React from 'react'
import './CreditCard.css';

import img1 from './img/visa.png'
import img2 from './img/master-card.svg'

const hiddenString = (number) => {
    return number.substr(-4)
}
const CreditCard = (props) => {
    
    const styles = {
      background: props.bgColor,
      color: props.color,
    };

    return (
      <div className="CreditCard" style={styles}>
        <img src={props.type === 'Visa' ? img1 : img2} alt=""/>
        <p class="accountNumber"> ************ {hiddenString(props.number)}</p>
        <div className="row">
          <div className="expiration">
            <p>
              Expires {props.expirationMonth}/{props.expirationYear}
            </p>
            <p>{props.bank}</p>
          </div>
        </div>
        <p className="owner">{props.owner}</p>
      </div>
    );
  }
  export default CreditCard;

  