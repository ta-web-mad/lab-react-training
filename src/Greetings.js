
const Greetings = (props) => {

    return (
        < article className="greetings">


            <h3>{(props.lang)} </h3>
            <p>{(props.children)} </p>


        </article>

    )
}


export default Greetings