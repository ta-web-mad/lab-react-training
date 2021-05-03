import React from 'react';
import './Greetings.css'

const Greetings = props => {
    let greet = ''

    switch (props.lang){
        case 'de': 
            greet = 'Hallo'
            break
        case 'en': 
            greet = 'Hello'
            break
        case 'es': 
            greet = 'Hola'
            break
        case 'fr': 
            greet = 'Bonjour'
            break

        default:
            greet = 'None'     
    }

    return (
        <div className='greet'>
            <p>{greet} {props.children}</p>
        </div>
    )
}

export default Greetings