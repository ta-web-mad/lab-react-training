import './CreditCard.css';

function creditNumberHide(cardNumber) {
	const sliced = cardNumber.slice(12);
	return `•••• •••• •••• ${sliced}`;
}

function formatDate(expYear, expMonth){
	const slicedYear = `${expYear}`.slice(2);
	const formatMonth = `${expMonth}`.length === 1 ? `0${expMonth}` : expMonth;
	return `${formatMonth}/${slicedYear}`;
}

function CreditCard(props) {
	const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

	return(
		<div className="credit-card" style={{backgroundColor: bgColor, color}}>

			<div className="logo">
				<img src={type === 'Visa' ? './img/visa.png' : './img/master-card.svg'} alt="logo"></img>
			</div>
			<div className="top">
				<p>{creditNumberHide(number)}</p>
			</div>
			<div className="mid">
				<p>{formatDate(expirationYear, expirationMonth)}      {bank}</p>
			</div>
			<div className="bottom">
				<p>{owner}</p>
			</div>

		</div>
	);
}

export default CreditCard;