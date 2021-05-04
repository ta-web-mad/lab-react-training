import './BoxColor.css'

const BoxColor = props => {

    const elementStyle = {
       
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }

    return (
        <div style={elementStyle} className="BoxColor">
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{elementStyle.backgroundColor}</p>
        </div>
    )
}

export default BoxColor