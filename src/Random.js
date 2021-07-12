
const Random = (props) => {

    const x = Math.random() * (props.max - props.min) + props.min

    return (
        < article className="random">


            <h3> Random value beween {Math.round(x)}  </h3>


        </article>

    )
}


export default Random