import './CreditCard.css'

const CreditCard = props => {

    const cardNum = props.number

    const divStyle = {
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`
    }

    const cardType = {
        visa: 'https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png',
        master: 'https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png'
    }

    return (
        <div style={divStyle} className='credit-card'>
            <div className='img-row'>
                <img src={cardType[props.type]} alt='Card logo'></img>
            </div>
            <p className="card-number">**** **** **** {props.number.substr(-4)}</p>
            <p>{props.expirationMonth}/{props.expirationYear} - {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )

}

export default CreditCard