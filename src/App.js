import React from 'react';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'
import './App.css'



function App() {
  return (
    <div className="App">
      <h1> ID Card </h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='Male'
        heigth={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='Female'
        heigth={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <hr class="hr"/>

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">English</Greetings>
      <Greetings lang="es">Español</Greetings>
      <hr class="hr"/>
      
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <hr class="hr"/>

      <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <hr class="hr"/>

      <h1>Credit Card</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={21}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"x
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={21}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
    <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={19}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />



    </div>

  );
}

export default App;
