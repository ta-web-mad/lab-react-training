import './DriverCard.css'
import Rating from './Rating'

const DriverCard = props => {

    return (

        < article className="driver-card" >
            <div className='driver-container'>
                <div className='driver-image'>
                    <img src={props.img} alt="Imagen" />
                </div>
                <div className='driver-info'>
                    <h5>First Name: {props.firstName}</h5>
                    <Rating>{props.rating}</Rating>
                    <h5>{props.car.model} {props.car.licensePlate}</h5>

                </div>
            </div>




        </article >
    )
}

export default DriverCard