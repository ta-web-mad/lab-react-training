import React from 'react';
import './Style.css';

const IdCard = (prop) => {
  return (
    <div className="IdCard box">
      <img src={prop.picture} alt={prop.firstName} />
      <div className="left">
        <strong>First name</strong>: {prop.firstName} <br />
        <strong>Last name</strong>: {prop.lastName} <br />
        <strong>Gender</strong>: {prop.gender} <br />
        <strong>Height</strong>: {prop.height / 100}height <br />
        <strong>Birth</strong>: {prop.birth.toDateString()} <br />
      </div>
    </div>
  );
};

export default IdCard;
