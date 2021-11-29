import React from 'react'
import './Greetings.css'

const Greetings = (props) => {
    let result;
    switch (props.lang) {
    case 'fr':
      result = <div className="Greetings">Bonjour! {props.children} </div>
      break;
    case 'de':
     result = <div className="Greetings">Hallo! {props.children} </div>
        break;
        default:
  }
  return result;
}

// {/* <div className='Greetings'>
//     <p>{props.lang} {props.text}</p>
// </div>s
//    */}

export default Greetings