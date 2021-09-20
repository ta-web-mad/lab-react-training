import './CreditCard.css';
import visa from './img/visa.png'
import mastercard from './img/master-card.svg'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

  const bullet = '•'

  return (
    <div style={{ backgroundColor: bgColor, color }}>
      <div className="card-logo"><img src={type === 'Visa' ? visa : mastercard} alt={type + ' logo'} /></div>
      <p className="credit-card-number">{(bullet.repeat(4) + ' ').repeat(3) + number.slice(12, 16)}</p>
      <p>Expires {expirationMonth + '/' + expirationYear}<span className="bank">{bank}</span></p>
      <p>{owner}</p>
    </div>
  );
}


export default CreditCard;