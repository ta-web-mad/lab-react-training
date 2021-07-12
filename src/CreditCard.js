
import './CreditCard.css'

const CreditCard = (props) => {

    return (
        <div className="CreditCard">

            <p> Type: {props.type}</p>
            <p> Number:  {props.number}</p>
            <p>expirationMonth  {props.expirationMonth}</p>
            <p>expirationYear: {props.expirationYear}</p>
            <p>  bank: {props.bank}</p>
            <p> expirationMonth  {props.expirationMonth}</p>
            <p>bgColor: {props.bgColor}</p>
            <p> color: {props.color}</p>


        </div>

    )
}

export default CreditCard