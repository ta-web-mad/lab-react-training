import pic from './visa.png'

const CreditCard = props => {

    const bgcolor = `${props.bgColor}`
    const color = `${props.color}`

    return (
        <div style={{ background: bgcolor, color: color }}>
            <img src={pic} alt={props.type}></img>
            <p>{props.number}</p>
            <p>{props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>

        </div>
    )
}

export default CreditCard