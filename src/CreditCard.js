
import "./CreditCard.css";
import masterCard from './master-card.svg'
import visa from './visa.png'


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){

    let card = ""
    if (type === 'Visa')card = visa 
    else if (type === 'Master Card') card = masterCard

    let fourDigits = number.slice(-4)
    let twoDigits = expirationYear.toString()
    let num = twoDigits.slice(-2)
    

  return (

        <div className='credit-card' style={{backgroundColor:`${bgColor}`, color}}>
            <div className='logo-card' ><img className='card-img' src={card} alt='logo'></img></div>
            <p className='font'> •••• •••• •••• {fourDigits}</p>
            <div>
                <p className='font-p'>Expires: {expirationMonth}/{num}   {bank}</p>
                <p className='font-p'>{owner}</p>
            </div>
        </div>

  )
}
export default CreditCard;
