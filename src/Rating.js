import React from 'react'
import './Rating.css'

const Rating = (props) => {
    const stars = Math.round(props.children)

    if (stars === 5) {
        return <p className="rating">★★★★★</p>
    } else if (stars === 4) {
        return <p className="rating">★★★★☆</p>
    } else if (stars === 3) {
        return <p className="rating">★★★☆☆</p>
    } else if (stars === 2) {
        return <p className="rating">★★☆☆☆</p>
    } else if (stars === 1) {
        return <p className="rating">★☆☆☆☆</p>
    } else if (stars === 0) {
        return <p className="rating">☆☆☆☆☆</p>
    }

}

export default Rating