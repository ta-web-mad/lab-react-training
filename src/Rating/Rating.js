import React from 'react';
import './Rating.css';
const getRating = (number) => {
  number = Math.round(number);
  switch (number) {
    case 0:
      return '☆ ☆ ☆ ☆ ☆';
    case 1:
      return '★ ☆ ☆ ☆ ☆';
    case 2:
      return '★ ★ ☆ ☆ ☆';
    case 3:
      return '★ ★ ★ ☆ ☆';
    case 4:
      return '★ ★ ★ ★ ☆';
    case 5:
      return '★ ★ ★ ★ ★';

    default:
      break;
  }
};

const Rating = (props) => {
  return <div className="rating">{getRating(props.children)}</div>;
};
export default Rating;
