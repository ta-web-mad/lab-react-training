

const ColorBox = props => {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`

    return (
        <article>

            <button className='colorbox' style={{ background: color }}>RGB({props.r}, {props.g}, {props.b})</button>

        </article>
    )
}

export default ColorBox
