import './DriverCard.css'
import Rating from './Rating'

const DriverCard = props => {
    //console.log(props)

    return (
        <div class="DriverCard">
            <img src={props.img} alt={props.name}></img>
                <div>
                    <h2>{props.name}</h2>
                    <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard