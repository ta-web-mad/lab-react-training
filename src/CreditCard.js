import './CreditCard.css'

const CreditCard = (props) => {

    const background = {
        backgroundColor: `${props.bgColor}`
    }

    const visaIcon = './img/visa.png';
    const masterCardIcon = './img/master-card.svg';

    const number = props.number.slice(-4)

    return (
        <article className="credit-card" style={background}>
            <img src={props.type === 'Visa' ? visaIcon : masterCardIcon} alt="card" />
            <div className="information-card">
                <p>•••• •••• •••• {number}</p>
                <p>Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </article>
    )
}

export default CreditCard;