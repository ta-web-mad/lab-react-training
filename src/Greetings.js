import './Greetings.css'

const Greetings = (props) => {

    let lang
    switch (props.lang) {
        case 'de':
            lang = 'Hallo'
            break;
        case 'fr':
            lang = 'Bonjour'
            break;
        default:
            lang = 'Hello'
    }
    return (

        <div className="box-hello">
            <p>{lang} {props.children}</p>
        </div>
    )
}

export default Greetings