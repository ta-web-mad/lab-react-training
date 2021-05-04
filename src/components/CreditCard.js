import './CreditCard.css'

const CreditCard = props =>{

    var lastFour = props.number.substr(props.number.length - 4)

    const credtitStyle ={
        backgroundColor: props.bgColor,
        color: props.color
    }

    return(
            <div className="eachCard" style={credtitStyle}>
                <img src={props.type}  />
                <h1 className="number">★★★★ ★★★★ ★★★★{lastFour}</h1>
                <div className="expires">
                    <p>Expires {props.expirationMonth}/{props.expirationYear}</p><p>{props.bank}</p>
                </div>
                <p className="owner">{props.owner}</p>
            </div>
    )
}

export default CreditCard