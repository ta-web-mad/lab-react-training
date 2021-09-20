import React from "react";
import "./NumbersTable.css"

const NumbersTable = (props) => {

    const {limit} = props
    const numArray = Array.from(Array(limit).keys())

    return (
        <div className="numbers-table">

            {numArray.length > 0 && numArray.map(number =>  {
                    let colorClass = number%2 === 0 ? "red-square" : ""
                    return (
                    <div className = {`square ${colorClass}`}> {number} </div>)
                })
            }

        </div>
    )
}

export default NumbersTable