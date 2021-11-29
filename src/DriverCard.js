import './DriverCard.css'
import Rating from './Rating'


function DriverCard(props) {
  return (
    <div className="driver-card">
    <img src={props.img} className="driver-img" alt="---" />
    <p className="letras">{props.name}</p>
    <Rating className="letras">{props.rating}</Rating>
    <p className="letras">{props.car.model} </p>
    <p className="letras">{props.car.licensePlate} </p>

    </div>
  );
}

export default DriverCard;