import "./BoxColor.css"

const BoxColor = (props) => {

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      }

    return(
        <div style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}} className="background-color-box">
            <p>rgb({props.r}, {props.g}, {props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)} </p>
        </div>
    )

}

export default BoxColor