import React from 'react'

function Greetings(props) {
  let text;
  if (props.lang === 'es') {
    text = 'Hola';
  }
  if (props.lang === 'fr') {
    text = 'Bonjour';
  }
  if (props.lang === 'de') {
    text = 'Halo';
  }
  if (props.lang === 'en') {
    text = 'Hello';
  }

  return (
    <div className="greeting-card" >
      <p>
        {text} {props.children}
      </p>
    </div>
  );
}

export default Greetings
