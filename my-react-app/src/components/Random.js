import './Random.css'

const Random = props => {

    return (
        <p>Random value between {props.min} and {props.max} = {Math.floor(Math.random() * `${props.max}`) + 1}</p>
    )
}

export default Random