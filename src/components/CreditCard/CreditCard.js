import React from 'react';
import { ContainerCreditCard } from './CreditCard.styled';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const brand = () => {
    switch (type) {
      case 'Visa':
        return './img/visa.png';
      default:
        return './img/master-card.svg';
    }
  };

  const numberTransform = () => {
    return '•••• •••• ••••' + number.substr(-4);
  };

  const monthTransform = () => {
    if (expirationMonth < 10) {
      return '0' + expirationMonth;
    } else {
      return expirationMonth;
    }
  };

  const yearTransform = () => {
    return expirationYear.toString().substr(-2);
  };

  return (
    <ContainerCreditCard bgColor={bgColor} color={color}>
      <img src={brand()} alt="hola"></img>
      <p>{numberTransform()}</p>
      <p>
        Expires {monthTransform()}/{yearTransform()}
      </p>
      <span>{bank}</span>
      <p>{owner}</p>
    </ContainerCreditCard>
  );
}
