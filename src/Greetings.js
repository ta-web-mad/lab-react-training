const Greetings = (props) => {

    return (
        <h1>
            <h2>{props.lang} {props.children}</h2>
        </h1>
    )
}

export default Greetings