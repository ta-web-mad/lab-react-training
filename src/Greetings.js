import './Greetings.css'

const Greetings = props => {
    //console.log(props.lang)


    let greeting = ''
    switch (props.lang) {
        case 'de':
            greeting = 'Hallo'
            break
        case 'fr':
            greeting = 'Bonjour'
            break
        case 'es':
            greeting = 'Hola'
            break
        case 'en':
            greeting = 'Hello'
            break
        default:
            break
    }

    return (
        <div className="box Greetings">
            <span>{greeting} {props.children}</span>
        </div>
    )
}

export default Greetings