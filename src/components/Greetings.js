import "./Greetings.css"

const Greetings = props => {
    let greeting

    switch (props.lang) {
        case "de":
            greeting = "Hallo"
            break
        case "es":
            greeting = "Hola"
            break
        case "fr":
            greeting = "Bonjour"
            break
        default:
            greeting = "Hello"
            break
    }

    return <p class="greeting">{greeting} {props.children}</p>

}

export default Greetings