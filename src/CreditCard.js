import './CreditCard.css'

const CreditCard = props => {

    const elementStyle = {
        backgroundColor: `${props.bgColor}`,
        color: props.color
    }

    // let cardType = () => {
    //     if (props.type === 'Master Card') {
    //         <img src='./img/master-card.svg' alt={props.type}/>
    //     } else {
    //         <img src='public/img/visa.png' alt={props.type}/>
    //     }
    // }

    
    let cardNumberSecure = props.number.substr(-4)

    return (
        <div style={elementStyle} className="CreditCard">
            {/* <div>
                {cardType()}
            </div> */}
            <p>**** **** **** {cardNumberSecure}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear}    {props.bank.toUpperCase()}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard