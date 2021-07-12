const Greetings = props => {

    return (

        <article className="greentins-box">
            <h5>{props.children} ({props.lang})</h5>
        </article>
    )
}

export default Greetings