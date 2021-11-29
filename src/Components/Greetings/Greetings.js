import React from 'react'
import './Greetings.css'



const Greetings = (props) => {

    const greeting = (lang) => {
        switch (lang){
        case "de":
        return "Hallo"
        break;

        case "en":
        return "Hello"
        break;

        case "es":
        return "Hola"
        break;

        case "fr":
        return "Bonjour"
        break;

        default:
        return
        break;
        }
    }



    return (
        <div>
            <p>{greeting(props.lang)} {props.children}</p>
        </div>
    )

}

export default Greetings