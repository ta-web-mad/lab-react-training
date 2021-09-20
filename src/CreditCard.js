import './CreditCard.css'

const CreditCard = (props) => {
    const cardLogo = (type) => {
        switch (type) {
            case 'Master Card':
                return './img/master-card.svg'
            default:
                return './img/visa.png'
        }
    }

    const checkZero = (month) => {
        if (month < 10) {
            return '0' + month
        }
        return month;
    }

    return (
        <div
            className="card"
            style={{backgroundColor: `${props.bgColor}`}}
        >
            <div
                className="card-line1"
            >
                <img src={cardLogo(props.type)} alt="credit card type"/>
            </div>
            <div>
                <p style={{color: `${props.color}`}}>•••• •••• •••• {props.number.slice(-4)}</p>
            </div>
            <div>
                <p>Expires: {checkZero(props.expirationMonth.toString())}
                /{props.expirationYear.toString().slice(-2)} {props.bank}</p>
            </div>
            <div>
                <p>{props.owner}</p>
            </div>
        </div>
        
    )
}

export default CreditCard