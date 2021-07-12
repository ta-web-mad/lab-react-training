const BoxColor = props => {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`

    return (
        <article>

            <p className='css' style={{ background: color }}>RGB({props.r}, {props.g}, {props.b})</p>

        </article>
    )
}

export default BoxColor 