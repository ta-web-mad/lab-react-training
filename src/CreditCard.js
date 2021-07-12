import visa from './visa.png'
import mastercard from './master-card.svg'
import './creditCard.css'

const CreditCard = props => {


        const formatedDate = (...date) => {
                let [month, year] = date

                month.toString().length === 1 ? month = `0${date[0]}` : month = date[0]

                year = year.toString().substring(2, 4)

                return `${month}/${year}`
        }



        console.log(formatedDate(props.expirationMonth, props.expirationYear))

        let card = props.type === 'Visa' ? visa : mastercard

        const cssProps = {
                width: '300px',
                height: '180px',
                background: `${props.bgColor}`,
                borderRadius: '15px',
                marginBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
        }

        // format card number show only last 4 digits
        const cardNumber = `****  ****  ${props.number.substring(props.number.length - 4)}`

        return (
                <div className="divCC" style={cssProps}>
                        <div>
                                <img src={card} alt="type of card" />
                        </div>
                        <div>
                                <p>{cardNumber}</p>
                        </div>
                        <div>
                                <p>Expires {formatedDate(props.expirationMonth, props.expirationYear)} <span>{props.bank}</span> </p>
                                <p>{props.owner}</p>
                        </div>



                </div>

        )


}

export default CreditCard;