import "./Greetings.css";

const Greetings = (props) => {


    let greetingText
    switch (props.lang) {
      case 'de':
       greetingText = 'Hallo';
      break;
      case 'fr':
        greetingText = 'Bonjour';
      break;
      case 'es':
        greetingText = 'Hola';
      break;
      default:
        greetingText = 'Hello';
    }

    return (
        <div className="boxGreeting">
            <h2>{greetingText} {props.children}</h2> 
        </div>
    )
  
}

  export default Greetings;


  