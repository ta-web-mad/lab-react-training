import React from 'react';

function Greetings(props) {
  function Lang() {
    let text = '';
    switch (props.lang) {
      case 'en':
        text = 'Hello';
        break;
      case 'fr':
        text = 'Bonjour';
        break;
      case 'de':
        text = 'Hallo';
        break;
      case 'es':
        text = 'Hola';
        break;
    }
    return text;
  }
  return (
    <div className="cardGreetings">
      <p>
        {Lang()} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
