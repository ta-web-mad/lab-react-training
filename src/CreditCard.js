import './CreditCard.css'

const CreditCard = props => {
    //console.log(props)

    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    let creditCardLogoPath = ''
    switch (props.type) {
        case 'Visa':
            creditCardLogoPath = '/img/visa.png'
            break
        case 'Master Card':
            creditCardLogoPath = '/img/master-card.svg'
            break
        default:
            break
    }

    const month = props.expirationMonth <= 9 ? `0${props.expirationMonth}` : props.expirationMonth
    const year = props.expirationYear.toString().substring(2)
    const expiryDate = `${month}/${year}`

    return (
        <div class="CreditCard" style={cardStyle}>
            <div class="type">
                <img src={creditCardLogoPath} alt={`${props.type}-logo`}></img>
            </div>
            <div class="number">•••• •••• •••• 8845</div>
            <div class="expires-bank">
                <span>Expires {expiryDate} </span>
                <span class="bank">{props.bank}</span>
            </div><div class="owner">{props.owner}</div>
        </div>
    )
}

export default CreditCard