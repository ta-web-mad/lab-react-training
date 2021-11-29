import React from 'react'

function Rating(props) {
    let stars = "";
    let rating = Math.round(props.children)
    if(rating === 0) {
        stars = '☆☆☆☆☆';
    }
    if (rating === 1) {
      stars = '★☆☆☆☆';
    }
    if (rating === 2) {
      stars = '★★☆☆☆';
    }
    if (rating === 3) {
      stars = '★★★☆☆';
    }
    if (rating === 4) {
      stars = '★★★★☆';
    }
     if (rating === 5) {
       stars = '★★★★★';
     }


    return <div className="stars-card">
           <span>{stars}</span>
  </div>;
}

export default Rating
