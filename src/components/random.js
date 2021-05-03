import './random.css'

const Random = props => {
    const { max, min } = props

    const random = Math.floor(Math.random() * max) + min

    return (<div className="random">Random value between {props.min} and {props.max} => {random}</div>)
}

export default Random