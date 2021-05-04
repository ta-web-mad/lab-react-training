import './Boxcolor.css'

let rHex, gHex, bHex

const BoxColor = props => {
    const numberColor = `${props.r},${props.g},${props.b}`
    const colorBG = `rgba(${props.r}, ${props.g}, ${props.b})`
    let numHex = rgb2hex(props.r, props.g, props.b)

    return (
        <div style={{ backgroundColor: colorBG }}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{numHex}</p>

        </div>
    )
}

export default BoxColor

function rgb2hex(r, g, b) {
    console.log(r, g, b);
    try {
        rHex = parseInt(r).toString(16).padStart(2, '0');
        gHex = parseInt(g).toString(16).padStart(2, '0');
        bHex = parseInt(b).toString(16).padStart(2, '0');
    } catch (e) {
        return false;
    }
    if (rHex.length > 2 || gHex.length > 2 || bHex.length > 2) return false;
    return '#' + rHex + gHex + bHex;
}