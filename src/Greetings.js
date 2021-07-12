
import './Greetings.css'

const Greetings = (props) => {
    let a = ""

    if (props.lang === "de") {
        a = <p>Hallo Stefan</p>
    }
    else if (props.lang === "en") {
        a = <p> Hello James </p>
    } else if (props.lang === "es") {
        a = <p>Hola Kevin</p>
    } else {

        a = <p>Bon soire Pierre</p>
    }

    return (
        <div className="greetings">
            <p>{a}</p>

        </div>

    )
}

export default Greetings