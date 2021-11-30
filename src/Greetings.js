import React from 'react'
import './Greetings.css'

    const language = (lang) => {
      
          if(lang === "de"){
            return "Hallo"
          } else if (lang === "en"){
            return "Hello"
          } else if (lang === "es"){
            return "Hola"
          } else if (lang === "fr"){
            return "Bonjour"
          }
      
     }
        
     const Greetings = (props) =>{
     
     return (
          <div className="card">
            <p> {language(props.lang)}{props.children}</p>
          </div>
        );
      }

export default Greetings