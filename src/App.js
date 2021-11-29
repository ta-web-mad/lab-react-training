import React from 'react';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';

function App() {
  return (
  <>
    <div className="ICards">
    
    <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />

    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

    </div>
    <div className="Greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
    </div>

    <div className="Random">
      <Random/>
    </div>

    
  </>
  );
}

export default App;
