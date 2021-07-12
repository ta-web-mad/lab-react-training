import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import RandomNum from './RandomNum';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard'

function App() {
  return (
    <>
      <section>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height='178'
          birth="1992-07-14"
          image="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height='172'
          birth="1988-05-11"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>
      <section>
        <Greetings lang='de' text='Ludwig' />
        <Greetings lang='fr' text='Francoise' />
      </section>
      <section>
        <RandomNum
          min='5'
          max='10'
        />
        <RandomNum
          min='8'
          max='16'
        />
      </section>
      <section>
       <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>
      <section>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth='3'
          expirationYear='2021'
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth='3'
          expirationYear='2021'
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth='12'
          expirationYear='2019'
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
      </section>
    </>
  )
}

export default App
