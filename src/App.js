import React from 'react';
import './App.css';
import Card from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Ratting from './Ratting';

function App() {
  return (
    <div className="App">
         <section>
         <h1>Id Card</h1>

        <Card
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg "
        />

        <Card
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>

      <section>

      <h1>Greetings</h1>
       <Greetings lang="de">  Ludwig</Greetings>
       <Greetings lang="fr">  François</Greetings>

      </section>

      <section>

      <h1>Random</h1>
       <Random min={1} max={6}/>
       <Random min={1} max={100}/>

       
      </section>

      <section>

      <h1>Box Color</h1>
       <BoxColor r={255} g={0} b={0} />
       <BoxColor r={128} g={255} b={0} />

     </section>

      <section>

      <h1>Credit Card</h1>
      <div className="Alineate">
       <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />

    </div>

     </section>

     <section>

     <h1>Ratting</h1>

    <Ratting>0</Ratting>
    <Ratting>1.49</Ratting>
    <Ratting>1.5</Ratting>
    <Ratting>3</Ratting>
    <Ratting>4</Ratting>
    <Ratting>5</Ratting>

    </section>



    </div>
  );
}

export default App;
