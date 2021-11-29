import React from 'react'
import './Rating.css'



const Rating = (props) => {
    return (
        <div className="Rating" >
            {props.children >= 0.5 ? "★" : "☆"}
            {props.children >= 1.5 ? "★" : "☆"}
            {props.children >= 2.5 ? "★" : "☆"}
            {props.children >= 3.5 ? "★" : "☆"}
            {props.children >= 4.5 ? "★" : "☆"}

        </div>
    )
}


export default Rating