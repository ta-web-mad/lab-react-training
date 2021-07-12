const boxColor = props => {


        // var fullColorHex = function (r, g, b) {
        //         var red = rgbToHex(r);
        //         var green = rgbToHex(g);
        //         var blue = rgbToHex(b);
        //         return red + green + blue;
        // };


        // ---------
        // probando el copilot xd arriba dejo la que encontré por inet, que es este doble valor << ?
        const rgbToHex = (r, g, b) => {
                const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                return hex.slice(0, 6);
        }

        // ---------

        const { r, g, b } = props;

        const hexColor = rgbToHex(r, g, b)

        const background = {
                background: `rgb(${props.r}, ${props.g}, ${props.b})`
        }

        const text = `rgb(${r},${g},${g}) --> #${hexColor}`

        return (

                <div style={background}>
                        <p style={{ textAlign: 'center', padding: '30px 0' }}>{text}</p>
                </div>

        )


}

export default boxColor;