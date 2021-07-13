
const BoxColor = props => {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`

    return(
        <div>
            <button style={{background: color}}>RGB({props.r}, {props.g}, {props.b})</button>
        </div>
    )
}

export default BoxColor 