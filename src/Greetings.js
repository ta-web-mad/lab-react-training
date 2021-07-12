

const Greetings = props => {

    const translator = value => {
        if (value === "de") {
            return "Hallo " + props.children
        }
        else if (value === "es") {

            return "Hola " + props.children

        }
        else if (value === "en") {

            return "Hello " + props.children

        }
        else if (value === "fr") {

            return "Bonjour " + props.children

        }


    }

    return (
        < div className="container" >
            <div className="row idCard">

                <p>{translator(props.lang)}</p>

            </div>
            <br />
        </div>

    )


}

export default Greetings
