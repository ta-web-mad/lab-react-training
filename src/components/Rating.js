import React from 'react';
import './Rating.css'

const Rating = props => {
    const rate = Math.round(Number(props.children))
    switch (rate){
        case 0:
            return '☆☆☆☆☆'
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
    }
    return (
        <div className = 'rating'> </div>
    )    
}

export default Rating