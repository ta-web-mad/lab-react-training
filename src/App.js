import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';

function App() {
  return (
    <div className="App">

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        // birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        // birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Juan</Greetings>
      </>
      <>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </>
      <>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      </>
      
      <CreditCard
        type="Visa"
        number="0123456789014454"
        expirationMonth={5}
        expirationYear={2026}
        bank="ESP"
        owner="Chiquito "
        bgColor="#11aa99"
        color="#white"
      />
      <CreditCard
        type="Mastercard"
        number="0123456789010001"
        expirationMonth={8}
        expirationYear={2022}
        bank="ESP"
        owner="Carmen "
        bgColor="#11aa80"
        color="#orange"
      />
      <CreditCard
        type="Visa"
        number="0123456789013030"
        expirationMonth={4}
        expirationYear={2030}
        bank="ESP"
        owner="Carlos "
        bgColor="#01aa99"
        color="#blue"
      />
    </div>
  );
}

export default App;
