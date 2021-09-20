import React from 'react';
import './Greeting.css';


function Greetings(props) {

    let greeting

    switch(props.lang){

        case 'de': 
            greeting = 'Hallo'
            break;
        case 'fr':
            greeting = 'Bonjour'
            break;
        case 'es':
            greeting = 'Hola'
            break;
        case 'en':
            greeting ='Hello'
            break;
        default:
            greeting = 'Tikitiki'
    }
     

    return (
        
        <div>
        <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings;