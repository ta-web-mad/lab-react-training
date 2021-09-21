import './Greetings.css'


function Greetings (props) {

    let greeting = function(){
        if (props.lang === 'de'){
            return 'Hallo';
        }else if(props.lang === 'en'){
            return 'Hello';
        }else if(props.lang === 'fr'){
            return 'Bonjour';
        }else return 'Hola'
    }

    return(
        <article>
            <h3>{greeting()} {props.children}</h3>
        </article>
    )     
  }

  export default Greetings