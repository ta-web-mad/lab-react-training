import React from 'react'
import '../css/greetings.css'


const Greetings = (props) => {
let greeting = '';
let name = props.children;

    switch (props.lang) {
        case 'de':
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el 'de'
        greeting = 'Hallo';
        break;
        case 'en':
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el 'en'
        greeting = 'Hello';
        break;
        case 'es':
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el 'es'
        greeting = 'Hola';
        break;
        case 'fr':
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el 'fr'
        greeting = 'Bonjour';
        break;
        
        default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        greeting = 'Hola';
        break;
      }

  return (
    <div className="greeting-cont">
         <p>{`${greeting} ${name}`}</p>
    </div>
  )
}

export default Greetings