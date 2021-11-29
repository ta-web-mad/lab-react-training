import React from 'react'
import './Greetings.css'

const Greetings = (props) => {
    const lang = props.lang
    let text

    if (lang === 'de') {
        text = 'Hallo'
    } else if (lang ==='es') {
        text = 'Hola'
    } else if (lang ==='fr') {
        text = 'Bonjour'
    } else {
        text = 'Hello'
    }
    
    return <p className='greeting'>{text} {props.children}</p>
       
}

export default Greetings