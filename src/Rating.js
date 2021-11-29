import React from 'react';
import './Rating.css';

const Rating = (prop) => {
  let number = prop.children;
  return (
    <div className="Rating">
      {number >= 0.5 ? '★' : '☆'}
      {number >= 1.5 ? '★' : '☆'}
      {number >= 2.5 ? '★' : '☆'}
      {number >= 3.5 ? '★' : '☆'}
      {number >= 4.5 ? '★' : '☆'}
    </div>
  );
};
export default Rating;