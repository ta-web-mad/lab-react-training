import './CreditCard.css'
import visa from './visa.png'
// import mastercard from './master-card.svg'


const CreditCard = props => {

    const bgcolor = `${props.bgcolor}`
    const color = `${props.color}`
    return (
        <article className='creditCard' style={{ background: bgcolor, color: color }}>
            <img src={visa} alt={props.type}></img>
            
            <p>{props.number}</p>
            
            <p>{props.expirationMonth}/{props.expirationYear}</p>
            
            <p>{props.bank}</p>
            
            <p>{props.owner}</p>

        </article>
    )
}
export default CreditCard;