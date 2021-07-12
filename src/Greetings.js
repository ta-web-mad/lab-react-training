import './Greetings.css'

const Greetings = props => {

    let sayHi=''
        switch(props.lang) {
            case 'en':
                return 'Hello'
                break
            case 'es':
                sayHi = 'Hola'
                break
            case 'de':
                sayHi = 'Hallo'
                break
            case 'fr':
                sayHi = 'Bonjour'
                break
                default:
                sayHi = 'Hello'
                break
        }
    return (
        <div className= 'sayHi'>
            <h3 lang={props.lang} >{sayHi} {props.text}</h3>
        </div>
    )
}

export default Greetings
