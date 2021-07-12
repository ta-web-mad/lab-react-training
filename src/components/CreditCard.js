import './CreditCard.css'
const CreditCard = props => {
    const bgColor = props.bgColor.substring(1)
    return (

        <div className='creditcard'  id={`${bgColor}`} >
       
            <h5 className=" type">{props.type}</h5>
            <h5 className=" cardNumber">⚫⚫⚫⚫ ⚫⚫⚫⚫ ⚫⚫⚫⚫ {props.number.substring(12)}</h5>
            <h5 className="">Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</h5>
            <h5 className="">{props.owner}</h5>
      
        </div >

    )
}




export default CreditCard