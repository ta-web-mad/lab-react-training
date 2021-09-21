import "./Random.css"

const Random = (props) => {
    
    let result = Math.floor(Math.random() * (props.max - props.min)) + props.min

    return (
        <p>{result}</p>
    )
}

export default Random;