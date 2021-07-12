const Greetings = (props) => {
    let greeting = undefined;
    switch(props.lang) {
        case 'de':
            greeting = `Hallo `;
            break;
        case 'en':
            greeting = `Hello `;
            break;
        case 'fr':
            greeting = `Bonjour  `;
            break;
        case 'es':
            greeting = `Hola `;
            break;
        default:
            greeting = 'Hello ';
    }

    return (
        <article>
            <p>{greeting} {props.children}</p>
        </article>
    )
}

export default Greetings;