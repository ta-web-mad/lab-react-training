import React from "react"
import "./gretings.css"

function Greetings(props) {
    let language

    switch (props.lang) {
        case 'fr':
            language = 'Bonjour'
            break;
        case 'de':
            language = 'Hallo'
            break;
        default:
            language = 'Hola'
    }

    return (
        <div className="lang">
            <p>{language} {props.children}</p>
        </div>

    )
}

export default Greetings