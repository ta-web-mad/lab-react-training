import React from 'react';
import "./Greetings.css";


function Greetings (props){

    switch (props.lang) {
        case 'de':
            return <p className='lang'>Hallo {props.children}</p>
            
        case 'fr':
            return <p className='lang'>Bonjour {props.children}</p>

        default:
            break;
    }
}

export default Greetings;
