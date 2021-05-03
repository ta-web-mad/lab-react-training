import './Greetings.css'

const Greetings = props => {

    return (
        <section class="greetings">
            <h4 lang={props.lang}>{props.children}</h4>
        </section>
    )
}

export default Greetings