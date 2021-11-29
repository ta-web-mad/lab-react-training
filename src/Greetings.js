import React from 'react'
import './Greetings.css'

function checkLang (lang){
let greeting 
    switch (lang){
        case "de":
            return greeting = "Hallo"
        case "en":
            return greeting = "Hello"
        case "es":
            return greeting = "Hola"
        case "fr":
            return greeting = "Bonjour"
        default:
            greeting = "Hello"
    }

    return greeting 
}

const Greetings = (props) => {

    return (
        <div className="Greetings">
                <p className="">{checkLang(props.lang)} {props.children}</p>
        </div>
    )
}

export default Greetings