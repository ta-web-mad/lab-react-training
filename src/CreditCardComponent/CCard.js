import './CCard.css'

const CCard = props => {
    let number = props.number
    let repNumber = number.slice(number.length - 4)
    return (
        <div className="card-child" style={{
            backgroundColor: props.bgColor,
            color: props.color,
            width: "30%",
            borderRadius: "10px"
        }}>
            <p><strong>............</strong>{repNumber}</p>

            <p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>

            <p>{props.owner}</p>
        </div >
    )
}

export default CCard