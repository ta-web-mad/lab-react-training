import "./Drivercard.css"

const DriverCard = (props) => {
 
    const number = Math.floor(props.rating)

    const rating = () => {


        switch (number){
    

            case 0:
                 return "☆☆☆☆☆"

            case 1:
                return "★☆☆☆☆"
            
            case 2:
                return "★★☆☆☆"
               
            case 3:
                return "★★★☆☆"
                
            case 4:
                return "★★★★☆"
    
            case 5:
                return "★★★★★"
                
            default:
                return "not a value"
                
        }

    }

    return (

        <div class= "driverClass">

            <div>

                <img src={props.img} alt="image car"/>

            </div>

            <div class="column">

                <p>{props.name}</p>
                <p>{rating()}</p>
                <p>{props.car.model}-{props.car.licensePlate}</p>
                

            </div>

            
        </div>
    )

}

export default DriverCard;