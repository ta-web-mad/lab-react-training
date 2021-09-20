import "./greetings.css"


const Greetings = (props) => {

let greeting

    switch(props.lang){

        case "de":

            greeting = "Hallo" 
            break;

        case "en":

            greeting = "Hello"
            break;

        case "es":

            greeting = "Hola"
            break;

        case "fr":

            greeting = "Bonjour"
            break;

        default:

            greeting = "Ciao!"
            break;
    }
    return(

    
        <div>

            <p>{greeting}</p>
            <p> {props.children}</p>
            
        </div>

    )

}

export default Greetings;