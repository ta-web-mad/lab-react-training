import React from 'react';
import { ContainerRating } from './Rating.styled';

export default function Rating({ children }) {
  const rounded = Math.floor(children);

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
    <ContainerRating>
      <p>{stars()}</p>
    </ContainerRating>
  );
}
