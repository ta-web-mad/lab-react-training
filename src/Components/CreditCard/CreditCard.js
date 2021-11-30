import React from 'react'
import "./CreditCard.css"
import visa from './visa.png'
import master from './master-card.svg'

// import portrait4 from './images/img4.jpeg'


const CreditCard = (props) => {
    
    let cardType
    props.type === 'Visa' ? cardType = visa: cardType = master

const password = (number) => number.slice(12)

return (

<div className="CreditCard" style={{backgroundColor:props.bgColor, color:props.color}}>
<img src={cardType} alt="---" />
<p className="">•••• •••• ••••{password(props.number)} </p>
<p className="">Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
<p className="">{props.owner}</p>




    </div>
    )
  }




// function CreditCard(props) {



//     return (
//       <div className="" style={{backgroundColor:props.bgColor, color:props.color}}>


//       {/* <strong className="">type: {props.type}</strong> */}
//     <p className="">number: {props.number} </p>
//     <p className="">expirationMonth: {props.expirationMonth} </p>
//     <p className="">expirationYear: {props.expirationYear} </p>
//     <p className="">bank: {props.bank} </p>
//     <p className="">owner: {props.owner} </p>


//       </div>
//     );
//   }

export default CreditCard