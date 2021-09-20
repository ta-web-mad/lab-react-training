import React from "react"
import "./random.css"

function Random(props) {
    const randomSix = Math.floor(Math.random() * 6 + 1)
    const randomHundred = Math.floor(Math.random() * 100 + 1)

    const numb = props.max === 6 ? 6 : 100

    const randomNumber = props.max === 6 ? randomSix : randomHundred

    return (
        <div className="random">
            <p>Random value between 1 and {numb}: {randomNumber}</p>
        </div>
    )
}
export default Random