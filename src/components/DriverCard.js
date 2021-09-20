import './DriverCard.css'

const DriverCard = props => {

    let stars = ""
    if (props.rating >= 0 && props.rating < 0.5) {
        stars = '☆☆☆☆☆'
    }
    if (props.rating >= 0.5 && props.rating < 1.5) {
        stars = '★☆☆☆☆'
    }
    if (props.rating >= 1.5 && props.rating < 2.5) {
        stars = '★★☆☆☆'
    }
    if (props.rating >= 2.5 && props.rating < 3.5) {
        stars = '★★★☆☆'
    }
    if (props.rating >= 3.5 && props.rating < 4.5) {
        stars = '★★★★☆'
    }
    if (props.rating >= 4.5 && props.rating <= 5) {
        stars = '★★★★★'
    }

    return (

        <div className='card_container'>
            <div className='image-container'>
                <img src={props.img} alt='driver photo'></img>
            </div>
            <div className='text-container'>
                <p className='drivers-name'>{props.name} </p>
                <p className='drivers-rating'>{stars}</p>
                <p className='car-info'>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>

    )
}

export default DriverCard