import './BoxColor.css'

const BoxColor = props => {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`

    return (
        <article>
            <button
                className='boxcolor'
                style={{ background: color }}>
                RGB({props.r}, {props.g}, {props.b})
            </button>
        </article>
    )
}
export default BoxColor;