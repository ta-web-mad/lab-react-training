import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import ClassComponent from './ClassComponent';
import Greetings from './Greetings';
import Random from './Random'
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';

function App() {
  return (
    <div className="App">
      {/* { <FunctionalComponent ></FunctionalComponent> */}
      <ClassComponent />
      {/* { <FunctionalComponent /> } */}
      <header className="App-header">
        <section className='id-card-container'>
          <article className='id-card-male'>
            <IdCard
              picture="https://randomuser.me/api/portraits/men/44.jpg"
              lastName='Doe'
              firstName='John'
              gender='male'
              height={178}
              birth={new Date("1992-07-14")}
            />
          </article>

          <article className="id-card-women">
            <IdCard
              picture="https://randomuser.me/api/portraits/women/44.jpg"
              lastName='Delores '
              firstName='Obrien'
              gender='female'
              height={172}
              birth={new Date("1988-05-11")}

            />
          </article>
        </section>
      </header>

      <article className='Greetings-container'>
         <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings> 
      </article>


      <article className='Random-container'>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </article>


      <article className='BoxColor-container'>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </article>


      <article className='CreditCard-container'>
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
      </article>

    </div>
  );
}

export default App;
