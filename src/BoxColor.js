import React from "react";


const BoxColor = (props) => {


    return (
        <div style={{height: '50px', width: "130px", padding: "40px", backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, color: "white"}}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )


}

export default BoxColor