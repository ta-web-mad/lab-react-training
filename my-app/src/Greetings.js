import React from 'react'
import './Greetings'


const Greetings = (props) => {
    
/*     const greet = (lang) => {
        
        if (lang === "de") { 
            return "Hallo"
        }
        else if (lang === "fr") {
            return "Bonjour"
        }
        else if (lang === "es") {
            return "Bienvenido"
        }
        else if (lang === "en") {
            return "Welcome"
        }
        
    } */

    const lang = {
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Holiwi',
        en: 'Welcome',
    }

    return (
        <p>{lang[props.lang]} {props.children}</p>
    )
    
  
}



export default Greetings