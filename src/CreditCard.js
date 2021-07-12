import visa from './img/visa.png'
import master from './img/master-card.svg'
import './CreditCard.css'




const CreditCard = props => {
    const types = type => {
        let image = type === 'Master Card' ? master : visa
        return image
    }
    const hideNums = (num) => {
        return num.toString().substr(12)
    }
    const lastDigits = (number) => {
        return number.toString().substr(2)
    }

    return (

        <article className="credit-card" style={{ backgroundColor: props.bgColor, color: props.color }}>
            <img src={types(props.type)} alt={props.type} />
            <p> ···· ···· ···· {hideNums(props.number)} </p>

            <div>
                <p> {props.expirationMonth} / {lastDigits(props.expirationYear)}</p>
                <p> {props.bank}</p>
            </div>
            <p> {props.owner} </p>
        </article>
    )
}

export default CreditCard

