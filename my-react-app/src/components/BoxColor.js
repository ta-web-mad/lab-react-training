import './BoxColor.css'

const BoxColor = props => {

    const boxStyle = {
        backgroundColor: `rgb(${props.r},${props.g}, ${props.b})`
    }

    return (
        <section style={boxStyle} class="boxColor">
            <p>rgb({props.r}, {props.g}, {props.b})</p>
        </section>
    )
}

export default BoxColor