import React from 'react';
import './IdCard.css'
const IdCard = (props) => {
  
const date = `${props.birth}`.slice(0,15);

  return (
    <div className="box IdCard">
    <div className="">
    <img src={props.picture} className="" alt="card-id" />
    <p> <strong className="">lastName: </strong>  {props.lastName} </p>
    <p><strong className=""> firstName: </strong> {props.firstName} </p>
    <p><strong className=""> gender: </strong> {props.gender} </p>
    <p><strong className=""> height: </strong> {props.height} </p>
   <p> <strong className=""> birth: </strong>  {date} </p>
    </div>
    </div>
  );
}

export default IdCard;