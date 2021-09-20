import React from "react";


function Random(props) {

    const min = props.min
    const max = props.max
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const randomNumber2 = Math.floor(Math.random() * (max - min)) + min;

    return (
        
            <div>
                <p>Random value between 1 and 6 : {randomNumber}</p>
                <p>Random value between 1 and 100 : {randomNumber2}</p>
            </div>
        

    )
}

export default Random;