const Random = (props) => {

    const number = Math.random() * (props.max - props.min) + props.min

    return (

        
        < article className ="css">
            <h3> Random value beween {props.min} and {props.max} = {Math.round(number)}  </h3>
        </article>

    )
}


export default Random 