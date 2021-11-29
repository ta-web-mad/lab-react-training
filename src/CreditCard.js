import './CreditCard.css'

function CreditCard(props) {
    const number = `${props.number}`.slice(12);
    const num = `···· ···· ···· ${number}`
    return (
    
      <div className="credit-card" style={{backgroundColor:props.bgColor, color:props.color}}>

    <div>
      {<strong className="">{props.type}</strong> }
      <p className="">{num} </p>
      <p className=""> Expire {props.expirationMonth} / {props.expirationYear} {props.bank} </p>
      <p className="">{props.owner} </p>
    </div>

      </div>
      
    );
  }

export default CreditCard

 