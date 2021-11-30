import React from 'react'
import './Greetings.css'

const lenguage= (lang) =>{
    if(lang === "de"){
        return "Halo"
    }else if(lang === "en"){
        return "Hello"
    }else if(lang === "es"){
        return "Hola"
    }else if(lang === "fr"){
        return "Bonjour"
    }
}




const Greetings = (props) => {
    return (
        <article className="greeting">
            
            <div>
                <p>{lenguage(props.lang)} {props.children} </p>
            </div>
        </article>
    )
}

export default Greetings