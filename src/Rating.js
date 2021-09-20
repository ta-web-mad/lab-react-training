import React from "react"
import "./rating.css"

function Rating(props) {
    let ratings
    if (props.children >= 0 && props.children < 0.5) {
        ratings = '☆☆☆☆☆'
    }
    if (props.children >= 0.5 && props.children < 1.5) {
        ratings = '★☆☆☆☆'
    }
    if (props.children >= 1.5 && props.children < 2.5) {
        ratings = '★★☆☆☆'
    }
    if (props.children >= 2.5 && props.children < 3.5) {
        ratings = '★★★☆☆'
    }
    if (props.children >= 3.5 && props.children < 4.5) {
        ratings = '★★★★☆'
    }
    if (props.children >= 4.5) {
        ratings = '★★★★★'
    }

    return (

        <div>
            <p>{ratings}</p>
        </div >

    )
}


export default Rating