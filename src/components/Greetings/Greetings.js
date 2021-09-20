import React from 'react';
import { ContainerGreetings } from './Greetings.styled';

export default function Greetings({ lang, children }) {
  
  const language = () => {
    switch (lang) {
      case 'en':
        return 'Hello';
      case 'fr':
        return 'Bonjour';
      case 'de':
        return 'Hallo';
      case 'es':
        return 'Hola';
      default:
        return 'Hola';
    }
  };

  return (
    <ContainerGreetings>
      <p>
        {language() + ' '}
        {children}
      </p>
    </ContainerGreetings>
  );
}
