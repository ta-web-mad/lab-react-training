import "./CreditCard.css"

const CreditCard = props => {
    let card = "**** **** **** " + props.number.slice(props.number.length - 4);

    let colors = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    return (
        <div class="creditCard" style={colors}>
            <p class="cardType">{props.type}</p>
            <p class="cardNumber">{card}</p>
            <p class="cardMeta">Expires {props.expirationMonth}/{props.expirationYear} <span>{props.bank}</span></p>
            <p class="cardMeta">{props.owner}</p>
        </div>
    )
}

export default CreditCard