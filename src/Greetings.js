import './Greetings.css'

const Greetings = props => {
    const greetings = {
        'de': 'Welkom',
        'en': 'Welcome',
        'es': 'Bienvenido',
        'fr': 'Bienvenue',
    }
    return (
        <h5>{greetings[props.lang]}, {props.children}</h5>
    )

}

export default Greetings