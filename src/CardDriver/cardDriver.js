import './cardDriver.css'
import Rating from './../StarRating/starRating'


const Driver = props => {
    return (
        <div style={{
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: "10px",
            display: 'flex',
            justifyContent: 'center',
            margin: "20px"
        }}>
            <div style={{
                width: "20%",
                height: "200px"
            }}>
                <img src={props.img} style={{
                    borderRadius: "50%",
                    width: "70%",
                    padding: "15px",
                    height: "80%"
                }}></img>
            </div>

            <div>
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate} </p>
            </div>

        </div >
    )
}

export default Driver
