import './DriverCard.css'

const DriverCard = (props) => {

    const flooring = (num) => {
        return Math.floor(num)
    }

    const howManyStars = (num) => {
        switch (num) {
            case 1:
                return '★☆☆☆☆'
            case 2:
                return '★★☆☆☆'
            case 3:
                return '★★★☆☆'
            case 4:
                return '★★★★☆'
            case 5:
                return '★★★★★'
            default:
                return '☆☆☆☆☆'
        }
    }

    return (
        <div>
            <aside>
                <img src={props.img} alt="driver card pic"/>
            </aside>
            <article>
                <h3>{props.name}</h3>
                <p classList="driver-stars">{howManyStars(flooring(props.rating))}</p> 
                <p>{props.car.model} {props.car.licensePlate}</p>
            </article>
        </div>
    )
}

export default DriverCard