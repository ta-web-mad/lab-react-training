import React from 'react';

function IdCard(props) {
  const date = props.birth;
  const height = props.height;
  return (
    <div className="cardPerson">
      <img src={props.picture} />
      <div>
        <p>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {parseInt(height)}
        </p>
        <p>
          <strong>Birth: </strong>
          {date.toString().slice(0, 15)}
        </p>
      </div>
    </div>
  );
}
export default IdCard;
