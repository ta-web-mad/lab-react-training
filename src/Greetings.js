const Greetings = props => {
    const lang = props.lang === 'fr' ? 'Bonjour' : 'Hallo'

    return (
        <div>
            <p>{lang}{props.children}</p>
        </div>
    )
}
export default Greetings