import './BoxColor.css'

const BoxColor = props => {

    const backgroundColor = `rgb(${props.r},${props.g},${props.b})`

    const boxStyle = { backgroundColor: backgroundColor }

    const componentToHex = function(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    const rgbToHex = function(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div style={boxStyle} className="colorBox">
            <p>{backgroundColor}</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor