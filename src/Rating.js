import React from "react";

const Rating = (props) => {
    const { children } = props

    const roundNumber = (number) => Math.round(parseFloat(number))

    const rating = {
        1: "★☆☆☆☆",
        2: "★★☆☆☆",
        3: "★★★☆☆",
        4: "★★★★☆",
        5: "★★★★★",
    }

    return (
        <div className="rating">
            {rating[roundNumber(children)]}
        </div>
    )
}

export default Rating