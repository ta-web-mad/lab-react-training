import './DriverCard.css'

const DriverCard = props => {

    return (
        <section class="drivercard">
            <div>
            <img class="driverportrait" src={props.img} alt={props.name}></img>
            </div>
            <div>
            <h3>{props.name}</h3>
            <img class="stars" src={props.rating === 0 ? "./emptystar.png" : "./filled-star.png"} alt={`${props.rating}`} />
            <img class="stars" src={props.rating >= 1.5 ? "./filled-star.png" : "./emptystar.png"} alt={`${props.rating}`} />
            <img class="stars" src={props.rating >= 2.5 ? "./filled-star.png" : "./emptystar.png"} alt={`${props.rating}`} />
            <img class="stars" src={props.rating >= 3.5 ? "./filled-star.png" : "./emptystar.png"} alt={`${props.rating}`} />
            <img class="stars" src={props.rating >= 4.5 ? "./filled-star.png" : "./emptystar.png"} alt={`${props.rating}`} />
            <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </section>
    )
}

export default DriverCard