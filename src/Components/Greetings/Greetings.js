import React from 'react';
import './Greetings.css'

function Greetings(props) {
  let greeting = ''
  
  if(props.lang === 'fr'){
      greeting = 'Bonjour';
  }
   if(props.lang ==='en'){
    greeting = 'Hello';
   }

   if(props.lang ==='de'){
    greeting = 'Bonjour';
   }

   if(props.lang ==='es'){
    greeting = 'Hola';
   }

   return (
       <div className="box">
           <h2>{greeting} {" "} {props.children}</h2> 
       </div>
   )
}

export default Greetings;