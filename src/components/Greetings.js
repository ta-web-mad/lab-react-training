import './Greeting.css'

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
            lang = 'Hola'   
    }



    return (
        <div className='leng'>
            <p>{lang} {props.children}</p>
        </div>
    
    )}

export default Greetings