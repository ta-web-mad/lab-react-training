import React from 'react';
import './Greetings.css'

const lenguage = (lang) => {
  switch (lang){

    case 'de':
     return "Guten Tag"
    
    case 'en':
      return "Hello"

    case 'es':
      return "Hola"
   
    case 'fr':
      return "Bonjour"

      default:
        return "Hello"

  }

}

const Greetings = (props) => {

  return (

    <div className="welcome">
    <p>{lenguage(props.lang)} {props.children}</p>
    </div>
    
  )
}

export default Greetings
