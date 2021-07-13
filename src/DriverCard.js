import Rating from './Rating';

const DriverCard = (props) => {

    return (
        <div >
            <img src={props.img} alt="DriverCard" />
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <div>
                    <p>{props.car.model} </p>
                    <p> {props.car.licensePlate}</p>
                </div>
        </div>
    )
}

export default DriverCard