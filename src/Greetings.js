import './Greetings.css'

const Greetings = props => {

    let greeting = ''

    if (props.lang === 'de') {
        greeting = 'Hallo'
    } else if (props.lang === 'fr') {
        greeting = 'Bonjour'
    }

    return (
        <div className="result-box">
            <p>{greeting} {props.name}</p>
        </div>
    )
}

export default Greetings