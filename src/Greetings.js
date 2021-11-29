import React from 'react'
import './Greetings.css'

const Greetings = (props) => {

  const lang = {
    de: 'Hallo',
    fr: 'Bonjour',
    es: 'Holiwi',
    en: 'Welcome',
  }
  
  return (
    <p>{lang[props.lang]} {props.children}</p>
  )

}

export default Greetings;