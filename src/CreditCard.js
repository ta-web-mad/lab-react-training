import './CreditCard.css'

const CreditCard = props => {

    let hiddenNumber = ''
    for (let i = 0; i < 12; i++) {
        hiddenNumber += '\u2022'
        if (i % 4 === 3) hiddenNumber += ' '
    }



    return (

        < div className="credit-card" style={{ color: props.color, backgroundColor: props.bgColor }} >
            <div className='container-card'>
                <h5 className="displayBlock type">{props.type}</h5>
                <h5 className="displayBlock cardNumber">{hiddenNumber}{props.number.substring(12)}</h5>
                <h5 className="displayBlock">Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</h5>
                <h5 className="displayBlock">{props.owner}</h5>
            </div>
        </div >
    )
}

export default CreditCard