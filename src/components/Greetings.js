import './Greetings.css'

const Greetings = props => {

    const options = { 'de': 'Hallo', 'en': 'Hello', 'fr': 'Bonjour', 'es': 'Hola' }

    return (
        <div className='greetings_container'>
            <p>{options[props.lang] + " " + props.name}</p>
        </div>
    )

}

export default Greetings