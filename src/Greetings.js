import React from 'react';
import './Greetings.css';

const Greetings = (props) => {

    let hello

    if (props.lang === 'de') {

        hello = 'Hallo'
    } else if (props.lang === 'fr') {
        hello = 'Bonjour'
    } else {
        hello = false
    }

    return (

        <article

            className='Greetings'
        >
            <div>
                <h1> {hello} </h1>
            </div>

        </article>
    )

    
}

export default Greetings

