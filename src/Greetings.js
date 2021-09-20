import './Greetings.css'

const Greetings = (props) => {
    const language = (lang) => {
        switch (lang) {
            case 'de':
                return 'Hallo'
            case 'en':
                return 'Hello'
            case 'es':
                return 'Hola'
            case 'fr':
                return 'Bonjour'
            default:
                return 'Hello'
        }
    }
    return (
        <p>{language(props.lang)} {props.name}</p>
    )
}

export default Greetings