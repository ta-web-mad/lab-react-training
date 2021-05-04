import './Greetings.css';

const Greetings = props =>{

    return(
        <article className="greeting">

            {props.lang}s
            <h1>{props.children}</h1>

        </article>

    )

}

export default Greetings