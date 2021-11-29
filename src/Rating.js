import React from 'react';
import './Rating.css'


const countStars = (number) => {
    switch (Math.round(number)){
        
        case 0: 
        return "☆ ☆ ☆ ☆ ☆"

        case 1:
        return "★ ☆ ☆ ☆ ☆"

        case 2:
        return "★ ★ ☆ ☆ ☆"

        case 3:
        return "★ ★ ★ ☆ ☆"

        case 4:
        return "★ ★ ★ ★ ☆"

        case 5:
        return "★ ★ ★ ★ ★"

        default:
        return "☆ ☆ ☆ ☆ ☆"

    }
}



const Rating = (props) => {

  return (

    <p className="rating">{countStars(props.children)}</p>
   
  )
}

export default Rating