import React from 'react';
import Visa from '../img/visa.png';
import MasterCard from '../img/master-card.svg';

function CreditCard(props) {
  let creditNum = props.number;
  function creditNumber(number) {
    const strings = number.slice(-4).padStart(16, '*');
    const result =
      strings.substring(0, 4) +
      ' ' +
      strings.substring(4, 8) +
      ' ' +
      strings.substring(8, 12) +
      ' ' +
      strings.substring(12, 16) +
      ' ' +
      strings.substring(16, 20);
    return result;
  }

  function imagenCard() {
    let imagen = '';
    switch (props.type) {
      case 'Visa':
        imagen = Visa;
        break;
      case 'Master Card':
        imagen = MasterCard;
        break;
    }
    return imagen;
  }

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <img src={imagenCard()} />
      <p className="CreditNumber">{creditNumber(creditNum)}</p>
      <p className="CreditInfo">
        {props.expirationMonth}/{props.expirationYear}
        <span>{props.bank}</span>
        <p>{props.owner}</p>
      </p>
    </div>
  );
}

export default CreditCard;
