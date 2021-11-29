import React from 'react'

function Greetings(props) {
  let greeting = '';
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo'
      break;
    case 'en':
      greeting = 'Hello'
      break;
    case 'es':
      greeting = 'Holla'
      break;
    case 'fr':
      greeting = 'Bonjour'
      break;
  }
  return (
    <div className="withborder">
      <p>
        {`${greeting}  ${props.children}`}
      </p>
    </div>
  )
}

export default Greetings
