import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'
import React from 'react';
import './App.css';


function App() {
  return (

    <div className="App">



      <h3 className="container">IdCard</h3>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <br></br>
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      /><br />

      <h3 className="container">Greetings</h3>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h3 className="container">Random</h3>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h3 className="container">Boxcolor</h3>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h3 className="container">CreditCard</h3>
      <br />
      < div className="container" >
        <div className="row justify-content-between">

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
      </div>

      <br />
    </div>







  );
}

export default App;
