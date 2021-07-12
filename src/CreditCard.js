const CreditCard = props => {

    return (




        <div className="col-3 creditCard" style={{ backgroundColor: props.bgColor }} >

            <img src={props.type} ></img>
            <p style={{ color: props.color }}>{props.number}</p>                <p style={{ color: props.color }} className="card1"> Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p style={{ color: props.color }} className="card1">{props.owner}</p>
        </div>




    )

}

export default CreditCard