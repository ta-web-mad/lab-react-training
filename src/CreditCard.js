
const CreditCard = (props) => {



    return (


        < article className="creditCard" style={{ backgroundColor: props.bgColor }}>


            <h3>{(props.type)} </h3>
            <h3>{(props.number)} </h3>
            <p>{(props.expirationMonth)}</p>
            <p>{(props.expirationYear)}</p>
            <p>{(props.bank)}</p>
            <p>{(props.owner)}</p>
            <p>{(props.bgColor)}</p>
            <p>{(props.color)}</p>

        </article>





    )
}


export default CreditCard