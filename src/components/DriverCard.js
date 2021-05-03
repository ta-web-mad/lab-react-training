import './DriverCard.css'

const DriverCard = props => {
    const { name, rating, img, car } = props

    let stars = Math.floor(Math.round(rating))

    const fullStar = '\u2605'
    const emptyStar = '\u2606'
    let element = []

    for (let i = 0; i <= stars - 1; i++) {
        element.push(fullStar)
    }
    for (let j = stars + 1; j <= 5; j++) {
        element.push(emptyStar)
    }

    const fullComponent = (
        <div className="DriverCard">
            <div className="square">
                <img className="img-crop" src={img}></img>
            </div>
            <div >
                <h3>{name}</h3>
                <p>
                    {element}
                </p>
                <p>{car.model}-{car.licensePlate}</p>
            </div>
        </div>
    )

    return fullComponent
}

export default DriverCard