import Master from './master-card.svg'
import Visa from './visa.png'


const CreditCard = props => {
    const lastDigits = (number) => {
        return number.toString().substr(2)

    }
    const logo = props.type === 'Master Card' ? Master : Visa
    const hidNumbers = (number) => {
        return number.toString().substr(12)
    }
    const points = '············'
    return (
        < article style={{ color: props.color, background: props.bgColor }}>
            <img src={logo}></img>
            <p>{points}{hidNumbers(props.number)}</p>
            <p>{props.expirationMonth}/{lastDigits(props.expirationYear)}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>


        </article>


    )
}

export default CreditCard