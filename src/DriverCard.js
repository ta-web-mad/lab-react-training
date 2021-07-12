import './driverCard.css'
import fullStar from './fullStar.png'
import emptyStar from './emptyStar.png'

const DriverCard = props => {


        const printTimes = []

        const rate = Math.round(props.rating)


        for (let i = 0; i < rate; i++) {
                printTimes.push(<img src={fullStar} style={{ width: '8%' }} alt="full star" />)
        }

        for (let i = rate; i < 5; i++) {
                printTimes.push(<img src={emptyStar} style={{ width: '8%' }} alt="empty star" />)
        }




        return (

                <div className="driver-card">
                        <div>
                                <img src={props.img} alt="img" />
                        </div>
                        <div className="driver-info">
                                <p>{props.name}</p>

                                <p>{printTimes}</p>

                                <p>{props.car.model} - {props.car.licensePlate}</p>
                        </div>
                </div>

        )

}


export default DriverCard;