import React from 'react';
import "./Greetings.css"


const Greetings = (props) => {
    let greetings
    switch (props.lang) {
        case "de":
            greetings = "Hallo"
            break
        case "en":
            greetings = "Hi"
            break
        case "es":
            greetings = "Hola"
            break
        case "fr":
            greetings = "Bonjour"
            break
    }
    return (
        <div class="Greetings">
            <p>{greetings}</p>
            <p>{props.children}</p>
        </div>
    )
}
export default Greetings;