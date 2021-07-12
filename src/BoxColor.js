const BoxColor = props => {


    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return (

        < div className="container justify-content-center" >
            <div className="row idCard" style={{ backgroundColor: rgbToHex(props.r, props.g, props.b) }} >
                <p align="center">rgb({props.r},{props.g},{props.b})</p>
                <p align="center"> {rgbToHex(props.r, props.g, props.b)} </p>
            </div>
            <br />

        </div >

    )


}

export default BoxColor