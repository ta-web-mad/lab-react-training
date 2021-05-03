import './CreditCard.css'

const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const digitsShown = number.slice(number.length - 4)
    let year = expirationYear.toString()
    year = year.slice(year.length - 2)

    let monthDigit = expirationMonth.toString()

    if (monthDigit.length === 1) { monthDigit = 0 + monthDigit }

    const creditCardStyle = {
        backgroundColor: bgColor,
        color: color
    }

    const fullComponent = (
        <div style={creditCardStyle} className="CreditCard">
            <h2>{type}
            </h2>
            <p>**** **** **** {digitsShown}</p>
            <p>Expires: {monthDigit}/{year}    {bank}</p>
            <p>{owner}</p>
        </div>
    )

    return fullComponent
}

export default CreditCard