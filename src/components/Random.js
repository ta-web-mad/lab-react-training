import "./Random.css"

const Random = props => {

    let result = Math.floor(Math.random() * props.max) + props.min
    let paragraph = `Random number between ${props.min} and ${props.max}: ${result}`

    return <p class="random">{paragraph}</p>
}

export default Random