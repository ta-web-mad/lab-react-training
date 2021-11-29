import './Greetings.css'
const Greetings = (props) => {

    const expression = (lang) => {
        switch(lang){
            case "de":
                return "Hallo";  
            case "en":
                return "Hello";  
            case "fr":
                return "Bonjour";
            case "es":
                return "Hola";
            default:
                return "Hello";
        }
    }
    return (
        <h2 className="greeting"> {expression(props.lang)} {props.children}</h2>
    )
    }
    
    export default Greetings