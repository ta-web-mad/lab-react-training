import './DriverCard.css';
import Rating from './Rating'

function DriverCard(props) {

	const{name, rating, img, car} = props;
	return (
		<div className="driver-card">
			<div className="driver-img" style={{backgroundImage: `url(${img})`}}>
				
			</div>
			<div className="driver-text">
				<h4>{name}</h4>
				<Rating>{rating}</Rating>
				<p>{`${car.model} - ${car.licensePlate}`}</p>
			</div>
		</div>
	)
}

export default DriverCard;