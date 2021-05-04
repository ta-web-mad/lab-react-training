import './Greetings.css'

const Greetings = props => {
    let lengWord = ""

    switch (props.lang) {
        case "de":
            lengWord = "Hallo"
            break;
        case "en":
            lengWord = "Hello"
            break;
        case "fr":
            lengWord = "Bonjour"
            break;
        case "es":
            lengWord = "Hola"
            break;
    }

    return (
        <div>
            <p>{lengWord} {props.children}</p>
        </div>
    )

}

export default Greetings