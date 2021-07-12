import './CreditCard.css';

import visaIcon from './img/visa.png';
import masterCardIcon from './img/master-card.svg';

const CreditCard = (props) => {

    let lastDigits = props.number.slice(props.number.length - 4);
    
    return (
        <article className="credit-card" style={{color: props.color, backgroundColor: props.bgColor}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <img 
                    src={ props.type === 'Visa' ? visaIcon : masterCardIcon } 
                    alt="credit card type"
                />
            </div>

            <p style={{fontSize: '1.8em', textAlign: 'center', margin: '10px auto 22px'}}>
                •••• •••• •••• {lastDigits}
            </p>

            <p>
                <span>Expires {props.expirationMonth}/{props.expirationYear}</span>
                <span style={{marginLeft: '30px'}}>{props.bank}</span>
            </p>
            <p>{props.owner}</p>
        </article>
    )
}

export default CreditCard;