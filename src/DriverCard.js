import './DriverCard.css';
import Rating from './Rating';


const DriverCard = ({ name, rating, img, car }) => {

  return (
    <article className="driver">
      <img src={img} alt={name} />
      <div className="driver-info">
        <h2>{name}</h2>
        <Rating children={rating} />
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </article>
  );
}


export default DriverCard;