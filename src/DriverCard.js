import './DriverCard.css'
import Rating from './Rating'

const DriverCard = props => {
    return (
    <article class="driverCard">
    <img src={props.img} alt={props.name}></img>
    <div>
        <h2>{props.name}</h2>
        <Rating rating={props.rating}/>
        <p>{props.car.model} - {props.car.licensePlate}</p>
    </div>
    </article>
    )
}

export default DriverCard