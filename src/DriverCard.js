import "./DriverCard.css";
import Rating from "./Rating";


function DriverCard ({name, rating, img, car}) {

    return(

        <div className='driver-card'>

            <div><img className='driver-img' src={img} alt='foto-driver'></img></div>

            <div>
                <p className='name-driver'>{name}</p>
                <Rating>{rating}</Rating>
                <p className='font-p'>{car.model} - {car.licensePlate}</p>
            </div>
            
        </div>

    )
}

export default DriverCard;
