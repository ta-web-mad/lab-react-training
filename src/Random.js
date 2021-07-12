const Random = props => {

    const random = (Math.random() * (props.max - props.min)) + props.min

    return (
        <div>
            <p> Random value beween {Math.round(random)}  </p>
        </div>
    )
}

export default Random