import React from "react";


const Random = (props) => {

    const random = Math.floor(Math.random() * (props.max - props.min +1) + props.min)

    return (
        <p>Random value between {props.min} and {props.max} => {random}</p>
    )


}

export default Random