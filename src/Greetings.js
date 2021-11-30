import React from 'react'
import './Greetings.css'


const language = (lang) => {
  switch (lang) {
    case 'de':
      return 'Hallo';
    case 'fr':
      return 'Bonjour';
    case 'en':
      return 'Hello';
    case 'es':
      return 'Hola';
  }
}

const Greetings = (props) => {

  return (
    <article className="greetings">
         <p>{language(props.lang)} {props.children}</p>
    </article>
  )
}

export default Greetings;