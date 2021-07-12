import './CreditCard.css'
const CreditCard = props => {

    const cardNumber = value => value.slice(-4, value.length)
    const yearNumber = value => value.toString().slice(-2, value.length)


    return (



        <article className="CreditCard" style={{ backgroundColor: props.bgColor, color: props.color }}>
            <div class='col'>
                    <div class="type">
                        <img src="/img/visa.png" />
                    </div>
                    <div class="number">•••• •••• •••• {cardNumber(props.number)}</div>
                    <div class="expires-bank">
                        <span>Expires {props.expirationMonth}/{yearNumber(props.expirationYear)} </span>
                        <span class="bank">{props.bank}</span>
                    </div>
                    <div class="owner">{props.owner}</div>
                </div>

        </article>
    )
}

export default CreditCard