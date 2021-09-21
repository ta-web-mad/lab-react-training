import './Boxcolor.css'

const BoxColor = (props) => {

    let rgb = `rgb(${props.r},${props.g},${props.b})`

    return (

        <div className='color' style={ {backgroundColor: rgb} }>
            <p>rgb({props.r},{props.g},{props.b})</p> 
        </div>

    )}

    export default BoxColor