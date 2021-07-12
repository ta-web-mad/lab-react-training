import './Greetings.css'

const Greetings = props => {
    let greetLang = ''
        switch (props.lang) {
            case 'en':
                 greetLang = 'Hello'
                break;
            case 'es':
                 greetLang = 'Hola'
                break;
            case 'de':
                 greetLang = 'Hallo'
                break;
            case 'fr':
                 greetLang = 'Bonjour'
                break;
                 greetLang = 'Hello'

            default:
                greetLang = 'Ciao'

                break;
            } 
    return (
        <div className='greet'>
        <h2
            lang={props.lang}>
               {greetLang} {props.text} !
            </h2>
        </div>
    )
}


export default Greetings