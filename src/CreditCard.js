import './CreditCard.css'

const CreditCard = props => {

    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    let imgUrl = ''

    if (props.type === "Visa") {
        imgUrl = './../img/visa.png'
    } else if (props.type === "Master Card") {
        imgUrl = './../img/master-card.svg'
    }

    var lastFour = props.number.substr(props.number.length - 4)

    return(
        <div style={cardStyle} class="creditCard">
            <img src={imgUrl} alt="Credit Card Type"></img>
            <p class="cardNumber">•••• •••• •••• {lastFour}</p>
            <span>Expires {props.expirationMonth}/{props.expirationYear}</span> <span class="bankName">{props.bank}</span>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard