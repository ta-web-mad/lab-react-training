import React from 'react';
import "./idCard.css"; 





function Greetings(props) {
   let greeting = ''
 
    if(props.lang ==='de'){
     greeting = 'Bonjour';
    }  
    if(props.lang === 'fr'){
        greeting = 'Hello';
    }

    return (
        <div className="container">
            <h2>{greeting}{props.children}</h2> 
        </div>
    )
}




export default Greetings; 