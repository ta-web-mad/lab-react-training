import React from 'react';
import "./Greetings.css"


const Greetings = (props) => {
    let greeting
    switch (props.lang){
        case "de":
            greeting = "Hallo"
            break

        case "en":
            greeting = "Hi"
            break

        case "es":
            greeting = "Hola"
            break

        case "fr":
            greeting = "Bonjour"
            break

        default:

            greeting = "Ciao"
            break
    }

    return (
         <div class="box">
            <p>{greeting}</p>
            <p>{props.children}</p>
        </div>


    )
}
export default Greetings;