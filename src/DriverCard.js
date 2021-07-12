import './DriverCard.css';
import Rating from './Rating';

const DriverCard = (props) => {

    return (
        <article className='driver-card'>
            <img src={props.img} alt="Driver card" />
            <main>
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>
                    <span>{props.car.model} </span>
                     - 
                    <span> {props.car.licensePlate}</span>
                </p>
            </main>
        </article>
    )
}

export default DriverCard;