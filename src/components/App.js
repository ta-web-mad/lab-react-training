import React from 'react';
import './App.css';
import IdCard from './IdCard'
import './IdCard.css';
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'



function App() {
  return (
    <body>

      <section className="Ids">

        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        
        />

        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />


      </section>

      <section className="greetings">
          <Greetings lang="de">Halo Ludwig</Greetings>
          <Greetings lang="en">Goooog Morningss</Greetings>
      </section>

      <section>
        <h1>Random value between 1 and 6  <Random min={1} max={6} /></h1>
        <h1>random value between 1 and 100 <Random min={1} max={100} /></h1>
      </section>

      <section>
        <BoxColor r={255} g={0} b={0} text="COLOR BOX"/>
        <BoxColor r={128} g={255} b={0} text="Link to google" />

      </section>
        <section className="credits">
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

        </section>


    </body>
  );
}

export default App;
