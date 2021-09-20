import './DriverCard.css'

const DriverCard = props =>

{
    
    let ratingMark = Math.round(props.rating);
    let stars

    switch (ratingMark) {
      case 0:
       stars = '☆☆☆☆☆';
      break;
      case 1:
        stars = '★☆☆☆☆';
      break;
      case 2:
        stars = '★★☆☆☆';
      break;
      case 3:
        stars = '★★★☆☆';
      break;
      case 4:
        stars = '★★★★☆';
      break;
      case 5:
        stars = '★★★★★';
      break;
      default:
        stars ='no rating';
        break;
    }





    return (
    <div className='driver-card'>
        
        <img className='driver-image' alt={props.name} src={props.img}></img>
        <div className='driver-info'>
            <h2>{props.name}</h2>
            <h2>{stars}</h2>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>


    </div>
    )
  
    
    

}



export default DriverCard