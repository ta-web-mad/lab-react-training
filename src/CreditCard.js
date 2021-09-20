import './CreditCard.css'

const CreditCard = props =>

{
    let logo =''

    if (props.type === 'Visa') {
    logo = '../img/visa.png'
    }

    if (props.type === 'Master Card') {
    logo = '../img/master-card.svg'
    }
 
    let coveredNumber = props.number.slice(-4)

    let month 

    if (props.expirationMonth.toString().length === 1) {
        month = `0${props.expirationMonth}`
    } else {
        month = props.expirationMonth;
    }

    let year = props.expirationYear.toString().slice(-2)



    return (
    <div className='card' style = {{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
      
        <img className='card-logo' alt={props.type} src={logo}></img>
        <h1 className='number'>•••• •••• •••• {coveredNumber}</h1>  
        <h3 className='left'>{month}/{year}&nbsp;&nbsp;&nbsp;&nbsp;{props.bank}</h3>
        <h3 className='left'>{props.owner}</h3>  
    </div>
    )
  
    
    

}



export default CreditCard