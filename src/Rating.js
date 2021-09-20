import './Rating.css'


const showRating = (number) => {

  if (number < 0.5) {
    return '☆☆☆☆☆'
  } else if (number < 1.5) {
    return '★☆☆☆☆'
  } else if (number < 2.5) {
    return '★★☆☆☆'
  } else if (number < 3.5) {
    return '★★★☆☆'
  } else if (number < 4.5) {
    return '★★★★☆'
  } else {
    return '★★★★★'
  }
}


const Rating = ({ children }) => {

  return (
    <p>{showRating(children)}</p>
  );
}


export default Rating;