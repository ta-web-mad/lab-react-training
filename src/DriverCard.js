import React from "react";
import './DriverCard.css'

function DriverCard(props){
    const five = Math.floor(props.rating)
    
    const start = () => {

    
    
           
            switch (five) {
        
                case 0:
                    return  '☆☆☆☆☆'
                case 1:
                    return  '★☆☆☆☆'
                case 2:
                    return  '★★☆☆☆'
                case 3:
                    return  '★★★☆☆'
                case 4:
                    return  '★★★★☆'
                case 5:
                    return  '★★★★★'
                default:
                    return 'Hola'
            }
        

}

    return(
        <div>
        <img className='imageOne' src={props.img} alt="toyota" width='80px'/>
        <h1>{props.name}</h1>
        <h3>{start()}</h3>
        
        <p>{props.car.model} - {props.car.licensePlate}</p>

        </div>
    )
}


export default DriverCard