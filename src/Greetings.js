const Greetings = props => {

    return (

        <article className="css">
            <p> {(props.lang)} {(props.children)}</p>
        </article>
    )
}

export default Greetings 