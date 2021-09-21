import './CreditCard.css'

const CreditCard = (props) => {

    let cardType

    props.type === "Visa" ? cardType = "img/visa.png" : cardType = "img/master-card.svg"

    let background = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    let numbers = (props.number).substr(-4)



    return (

        <div style={background}>
            <img src={cardType} alt="props.cardType" />
            <p>● ● ● ● ● ● ● ● ● ● ● ● {numbers}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
            <p>{props.owner}</p>

        </div>

    )
}

export default CreditCard;