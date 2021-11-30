import React from 'react';

const Greetings = (prop) => {
  let result;
  switch (prop.lang) {
    case 'fr':
      result = <div className="box">Bonjour {prop.children}</div>;
      break;

    case 'de':
      result = <div className="box">Hallo {prop.children}</div>;
      break;

    case 'es':
      result = <div className="box">Hola {prop.children}</div>;
      break;

    default:
      result = <div className="box">Hello {prop.children}</div>;
      break;
  }

  return result;
};

export default Greetings;
