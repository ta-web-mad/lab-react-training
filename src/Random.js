const Random = props => {

    const numRandom = (min, max) => {
        return Math.floor(Math.random() * ((max + 1) - min) + min)
    }
    return (
        <p>Random value between {props.min} and {props.max}  {numRandom(props.min, props.max)}</p>

    )
}

export default Random