import "./CreditCard.css"

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    const bankLogo = (type) => {
        switch(type) {
            case "Visa":
                return "/img/visa.png"
            case "Master Card":
                return "/img/master-card.svg"
            default:
                return "/img/visa.png"
        }
    }

    const hidePassword = (string) => {

        let hiddenPassword = string.slice(-4).padStart(16, "•")
        return hiddenPassword.substring(0, 4) + " " + hiddenPassword.substring(4, 8) + " " + hiddenPassword.substring(8, 12) + " " + hiddenPassword.substring(12, 16)
    }

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    };

    return(

        <div className="credit-card" style={divStyle}>
            <div className="first-row">
                <img className="bank-logo" src={bankLogo(type)} alt={`${type} logo`}></img>
            </div>
            <p className="card-number"> {hidePassword(number)} </p>
            <div className="client-info">
                <p>Expires {expirationMonth.toString().padStart(2, '0')} / {expirationYear} <span className="bank-name"> {bank} </span> </p>
                <p>{owner}</p>
            </div>

        </div>
    )
}

export default CreditCard