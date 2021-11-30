import React from 'react';
import './IdCards.css';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="idcards-container">
      <img src={picture} alt="card-img" />
      <div>
        <p>
          <strong>First name:</strong>
          {firstName}
        </p>
        <p>
          <strong>Last name:</strong>
          {lastName}
        </p>
        <p>
          <strong>Gender:</strong>
          {gender}
        </p>
        <p>
          <strong>Height:</strong>
          {height}
        </p>
        <p>
          <strong>Birth:</strong>
          {birth.toLocaleDateString('en-US')}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
