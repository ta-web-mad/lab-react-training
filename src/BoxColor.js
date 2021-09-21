import './BoxColor.css'

const BoxColor = (props) => {

    const { r, g, b } = props
    const background = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }
    return (
        <div>
            <p className="box-color" style={background} >rgb({props.r},{props.g},{props.b}) </p>
        </div>
    )
}

export default BoxColor;