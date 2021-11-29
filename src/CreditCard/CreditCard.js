import React from 'react';
import Visa from './visa.png';
import MasterCard from './master-card.svg';
import './CreditCard.css';

const giveStyle = (colorBack, color) => {
  return { backgroundColor: `${colorBack}`, color: `${color}` };
};

const hideNumbers = (number) => {
  return number.slice(12);
};

const expirationDate = (month, year) => {
  month = month.toString();
  console.log(month.length);
  if (month.length < 2) {
    month = '0' + month;
  } else {
  }
  return 'Expires :' + month + '/' + year;
};

const CreditCard = (props) => {
  return (
    <div className="creditCard" style={giveStyle(props.bgColor, props.color)}>
      <img src={props.type === 'Visa' ? Visa : MasterCard} alt="" />
      <p className="creditNumber">
        &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
        &#9679;&#9679;&#9679;&#9679;
        {hideNumbers(props.number)}
      </p>
      <div className="dateBank">
        <p>{expirationDate(props.expirationMonth, props.expirationYear)}</p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  );
};
export default CreditCard;
