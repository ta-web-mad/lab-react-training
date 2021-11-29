import React from 'react';
import './IdCard.css';

const fixHeight = (height) => {
  return height / 100 + 'm';
};
const getDate = (date) => {
  return date.toString().slice(0, 15);
};

const IdCard = (props) => {
  return (
    <div className="card">
      <img src={props.picture} alt="" />
      <div className="cardData">
        <p>
          <b>First Name :</b>
          {props.firstName}
        </p>
        <p>
          <b>Last Name :</b>
          {props.lastName}
        </p>
        <p>
          <b>Gender :</b>
          {props.gender}
        </p>
        <p>
          <b>Height :</b>
          {fixHeight(props.height)}
        </p>
        <p>
          <b>Birdth :</b>
          {getDate(props.birth)}
        </p>
      </div>
    </div>
  );
};
export default IdCard;
