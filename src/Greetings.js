import React from "react";

const selectLang = (lang) => {

    let greeting = '';

    switch (lang) {
        case 'de':
            greeting = "Hallo!"
            break;

        case 'en':
            greeting = "Hello!"
            break;

        case 'es':
            greeting = "¡Hola!"
            break;

        case 'fr':
            greeting = "Bonjour!"
            break;

    }
    return greeting;
}
const Greetings = ({ lang, children }) => {
    return (
        <p>{selectLang(lang) + ' ' + children} </p>
    )
}
export default Greetings