import "./BoxColor.css"

const BoxColor = props => {

    let bgBox = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }

    return (
        <div class="box" style={bgBox}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}

export default BoxColor