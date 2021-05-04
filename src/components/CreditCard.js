import './CreditCard.css'
import visa from './visa.png'

const CreditCard = props => {

    const backgroundColor = `${props.bgColor}`
    const color = `${props.color}`


    return (

        <article>

            <div className='credit-card' style={{ background: backgroundColor, color: color }}>

                <img src={visa} alt={props.type}></img>
                <p>{props.number}</p>
                <p>{props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>

            </div>

        </article>
    )
}

export default CreditCard