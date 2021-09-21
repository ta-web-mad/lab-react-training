import './DriverCard.css'

const DriverCard = (props) => {

    let popino
    props.rating < 4.5 ? popino = '★★★★☆' : popino = '★★★★★'

    return (
        <article className="card-driver">
            <div>
                <img className="driver-img" src={props.img} alt="image" />
            </div>
            <div className="information-card-driver">
                <p><strong>{props.name}</strong></p>
                <p><strong>{popino}</strong></p>
                <p><strong> {props.car.model} {props.car.licensePlate}</strong></p>
            </div>
        </article>
    )
}

export default DriverCard