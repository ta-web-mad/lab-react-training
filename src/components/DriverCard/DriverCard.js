import React from 'react';
import { ContainerDriverCard } from './DriverCard.styled';

export default function DriverCard({ name, rating, img, car }) {
  const rounded = Math.floor(rating);

  const stars = () => {
    switch (rounded) {
      case 0:
        return '☆☆☆☆☆';
      case 1:
        return '★☆☆☆☆';
      case 2:
        return '★★☆☆☆';
      case 3:
        return '★★★☆☆';
      case 4:
        return '★★★★☆';
      case 5:
        return '★★★★★';
      default:
        return 'hola';
    }
  };

  return (
    <ContainerDriverCard>
      <div>
        <img src={img} alt="person"></img>
      </div>
      <div class="column">
        <h2>{name}</h2>
        <span>{stars()}</span>
        <p>
          {car.model}-{car.licensePlate}
        </p>
      </div>
    </ContainerDriverCard>
  );
}
