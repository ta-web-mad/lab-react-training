const Random = props => {

    const randomValue = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min

    return (
        <h5>Random value between {props.min} and {props.max}: {randomValue}</h5>
    )

}

export default Random