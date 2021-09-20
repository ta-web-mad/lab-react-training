import "./Greetings.css";


const selectLanguage = (lang) => {

  let greeting = '';

  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
  }
  return greeting;
}


const Greetings = ({ lang, children }) => {
 
  return (
    <p>{selectLanguage(lang) + ' ' + children}</p>
  );
}


export default Greetings;