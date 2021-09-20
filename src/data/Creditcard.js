import "./Creditcard.css"


const CreditCard = (props) => {

    let type 

    switch(props.type){

        case "Visa":

          type ="img/visa.png"
            break;

        case "Master Card":

          type ="img/master-card.svg"
            break;

        default:
    
          break;


    }


    let lastFourDigits = (props.number).substr(-4);

    let expires = `${props.expirationMonth}/${props.expirationYear}`


    const divStyle = {

        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`

    }

    return(

        <div className = "creditCard" style = {divStyle}>

            <p> <img src={type} alt = "visa image" width="100px"/></p> 
            <p>●●●● ●●●● ●●●● {lastFourDigits}</p>
            <p>{expires}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>

        </div>



    )

}

export default CreditCard;