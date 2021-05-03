import './BoxColor.css'

const BoxColor = props => {
    //console.log(props)

    const rgbColor = `rgb(${props.r}, ${props.g}, ${props.b})`
    let textColor = (((props.r + props.g + props.b)/3) < (255 / 2)) ? 'white' : 'black'

    const boxStyle = {
        backgroundColor: rgbColor,
        color: textColor
    }

    let rgbToHex = rgb => {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex
    }
    const hexColor = `#${rgbToHex(props.r) + rgbToHex(props.b) + rgbToHex(props.b)}`

    return (
        <div className="box BoxColor" style={boxStyle}>
            <span>{rgbColor}</span> <br></br>
            <span>{hexColor}</span> <br></br>
        </div>
    )
}

export default BoxColor