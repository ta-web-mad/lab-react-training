const Random = (props) => {
    
    const result = Math.floor(Math.random() * (props.max - props.min) + props.min)

    return (
        <article>
            <p>Random value between {props.min} and {props.max} ={">"} {result}</p>
        </article>
    )
}

export default Random;