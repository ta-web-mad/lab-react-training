import React from 'react'
import './Greetings.css'


const Greetings = (props) => {
    let greetings = ""
    
    if(props.lang==="de") {
        greetings = 'Hallo'
    } else if (props.lang==="fr") {
        greetings = 'Bonjour'

    } else {

    }

    return (
        <article className="Greetings">         
            <p>{greetings}</p>
            <p>{props.children}</p>
         </article>
    )
}

export default Greetings