import './Random.css'

const Random = props => {
    const phrase = `Random value between ${props.min} and ${props.max} => ${Math.floor(Math.random() * props.max) + props.min}`
    return (
        <p>
            {phrase}
        </p>
    )
}

export default Random