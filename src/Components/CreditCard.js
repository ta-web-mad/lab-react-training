import React from 'react';
import './Style.css';

const Random = (prop) => {
  return (
    <div
      className="Credit-Card"
      style={{
        backgroundColor: prop.bgColor,
        color: prop.color,
      }}
    >
      <div className="type">
        {prop.type === 'Visa' ? (
          <img src="/img/visa.png" alt="" />
        ) : (
          <img src="/img/master-card.svg" alt="" />
        )}
      </div>
      <div>**** **** **** {prop.number.substr(-4)}</div>
      <div>
        <span>
          Expires {'0' + prop.expirationMonth}/
          {prop.expirationYear.toString().substr(2)}
        </span>
        <span>{prop.bank}</span>
      </div>
      <div>{prop.owner}</div>
    </div>
  );
};

export default Random;
