import React from 'react'
import './Rating.css'



const Rating = (props) => {

    const {children} = props

    const roundedNumber = (number) => Math.round(parseFloat(number))

    const rating = (number) => {
        console.log(number);
    switch (number) {
        case 0:
        return "·····"

        case 1:
        return "····"

        case 2:
        return "···"

        case 3:
        return "··"

        case 4:
        return "·"

        case 5:
        return ""

        default:
        return
        }
    }

    return (
        <div>
            <p>{rating(roundedNumber(children))}</p>
        </div>
    )

}


export default Rating