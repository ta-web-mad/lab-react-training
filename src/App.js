import React from 'react';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <div>
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

      <h1>Greetings</h1>
      <div>
        <Greetings lang="de" children="Ludwig" />
        <Greetings lang="fr" children="François" />
      </div>

      <h1>Random</h1>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <h1>BoxColor</h1>
      <div>
        <BoxColor r={255} g={0} b={0} color="white"/>
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h1>CreditCard</h1>
      <div>

      </div>

      <h1>Rating</h1>
      <div>

      </div>

      <h1>DriverCard</h1>
      <div>

      </div>
    </div>
  );
}

export default App;
