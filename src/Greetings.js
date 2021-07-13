const Greetings = props => {
    const language = lang => {
        switch (lang) {
            case 'de':
                return 'hallo'
                break
            case 'en':
                return 'hello'
                break

            case 'es':
                return 'hola'
                break
            case 'fr':
                return 'Bonjour'
                break
        }
    }

    return (
        <>
            <p>{language(props.lang)} {props.children}</p>
        </>


    )
}

export default Greetings