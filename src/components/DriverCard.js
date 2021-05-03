import "./DriverCard.css"
import Rating from "./Rating"

const DriverCard = props => {
    return (

        <div className="driverCard">

            <figure>
                <img src={props.img} alt={props.name} />
            </figure>

            <div>
                <p><strong>{props.name}</strong></p>
                <p><Rating>{props.rating}</Rating></p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard