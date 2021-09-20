const Rating = props =>

{
    let ratingMark = Math.round(props.children);
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
        <div>
            <h1>{stars}</h1> 
        </div>
    )
  
}

export default Rating