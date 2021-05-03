import './CreditCard.css'

const CreditCard = props => {

    return (
        <section style={{ color: `${props.color}`, backgroundColor:  `${props.bgColor}`}} class="creditcard">
            <figure>
                <img class="cardtype" src={props.image} alt={props.type}/>
            </figure>
            <article>
                <h2>···· ···· ···· {`${props.number}`.slice(- 4)}</h2>
            </article>
            <article>
                <p> Expires {props.expirationMonth} / {props.expirationYear}    {props.bank}</p>
                <p>{props.owner}</p>
            </article>
        </section>
    )
}

export default CreditCard