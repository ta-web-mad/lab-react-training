import './BoxColor.css'

const BoxColor = props => {

    const boxStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        width: '100%',
        padding: '20px'
    }

    return (
        <article>
            <div style={boxStyle}  className="boxColor"> {props.text}</div>
        </article>
    )
}

export default BoxColor