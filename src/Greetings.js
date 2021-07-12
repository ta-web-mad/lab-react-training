const Greetings = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)
    const language = lang => {
        switch (lang) {
            case "de":
                return 'Hallo '
                break
            case "fr":
                return 'Bonjour '
                break
            case "en":
                return 'Hello '
                break
            case "es":
                return 'Hola '
                break
        }

    }

    return (

        <article className="user-card">
            <p> {language(props.lang)} {capitalize(props.children)}</p>
        </article>
    )
}

export default Greetings