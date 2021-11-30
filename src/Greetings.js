import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
    let result;
    switch (props.lang) {
      case 'fr':
        result = <article className="greet"><p className="greetings"> Bonjour! {props.children}</p></article>
        break;
      case 'de':
        result = <article className="greet"><p className="greetings"> Hallo! {props.children}</p></article>
        break;
      case 'es':
        result = <article className="greet"><p className="greetings"> Hola! {props.children}</p></article>
        break;
      default:
        result = <article className="greet"><p className="greetings"> Hello! {props.children}</p></article>
        break;
    }
    return result;
  };
  export default Greetings;

