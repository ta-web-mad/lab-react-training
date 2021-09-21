import React from 'react';
import './Greetings.css'

const Greetings = (props) => {
    
    const { lang } = props

    const greeting = {
        'de': 'Hallo',
        'en': 'Hello',
        'es': 'Hola', 
        'fr': 'Bonjour'
    } 

    return (
        <div className="border">
            <p>{greeting[lang]} {props.children} </p>
        </div>
    )
}

export default Greetings