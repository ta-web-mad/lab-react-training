const BoxColor = props => {
    const rgbToHex = (rgb) => {
        var hex = Number(rgb).toString(16)
        if (hex.length < 2) {
            hex = "0" + hex
        }
        return hex
    }
    const boxStyle = () => {

        let red = rgbToHex(props.r)
        let green = rgbToHex(props.g)
        let blue = rgbToHex(props.b)
        const finalColor = '#' + red + green + blue
        return finalColor

    }

    return (

        <article className="user-card" style={{ backgroundColor: boxStyle() }}>
            <p> rgb({props.r},{props.g}, {props.b}) </p>
            <p> {boxStyle()} </p>
        </article>
    )
}

export default BoxColor