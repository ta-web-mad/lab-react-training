import "./Greetings.css"


const Greetings = (props) => {
    const {lang, children} = props

    const customGreeting = (lang) => {
        
        switch(lang) {
        case 'de':
            return "Hallo" ;
        case 'en':
            return "Hello" ;
        case 'es':
            return "Hola";
        case 'fr':
            return "Bonjour"
        default:
        return 'Hello';
        }
    }
    return (
        <p className="greeting"> {customGreeting(lang)} {children}</p>
    )

}

export default Greetings