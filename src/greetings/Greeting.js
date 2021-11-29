import React from 'react';
import './Greeting.css';

const returnHello = (lang) => {
  switch (lang) {
    case 'de':
      return 'Hallo';
    case 'en':
      return 'Hello';
    case 'es':
      return 'Hola';
    case 'fr':
      return 'Bonjour';
    default:
      break;
  }
};
const Greetings = (props) => {
  return (
    <div className="greetings">
      <p>
        {returnHello(props.lang)} {props.children}{' '}
      </p>
    </div>
  );
};
export default Greetings;
