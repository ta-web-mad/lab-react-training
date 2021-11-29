import './DriverCard.css';
import Rating from '../Rating/Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className="driver-card">
      <div className="left-col">
        <img src={img} alt={name} />
      </div>

      <div className="right-col">
        <h3>{name}</h3>
        <Rating className="rating">{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
