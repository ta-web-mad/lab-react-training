import './greetings.css'

const Greetings = props => {
    let fullComponent = ""
    const lang = `${props.lang}`
    console.log(lang);

    if (lang === "de") {
        return fullComponent =
            (<div className="greetings"> Hallo {props.children}</div>)
    } else {
        return fullComponent =
            (<div className="greetings">Bonjour {props.children}</div>)
    }

}

export default Greetings