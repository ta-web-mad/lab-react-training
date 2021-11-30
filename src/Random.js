import React from 'react';
import "./Random.css"

const Random = (props) => {

    const {min, max} = props
    const randomNumber = (minVal, maxVal) => Math.floor((Math.random() * (max - min + 1) + min))

    return (
        <p className="box">Random value between {min} and {max} =&gt; {randomNumber(min, max)}</p>
    )

}

export default Random