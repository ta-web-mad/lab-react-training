import React from 'react';
import './App.css';
import IdCard from './IdCard'
import Greetings from './Greetings' 
import ColorBox from './ColorBox'
import CreditCard from './CreditCard'
import Random from './Random'

const App = () => {
  return (
  <main>
    <section>
    <IdCard
    lastName='Doe'
    firstName='John'
    gender='male'
    height={178}
    birth="Tue Jul 14 1992"
    picture="https://randomuser.me/api/portraits/men/44.jpg"
  />

    <IdCard
    lastName='Delores '
    firstName='Obrien'
    gender='female'
    height={172}
    birth="Tue May 11 1988"
    picture="https://randomuser.me/api/portraits/women/44.jpg"
  />
    </section>

    <section>

      <h1>Greetings</h1>
      <Greetings lang='es'
        children='Hola Jose!'>
      </Greetings>
      <Greetings lang='en'
        children='Hello Mr Hose!'>
        
      </Greetings>


    </section>

    <section>
      <Random
      min={1}
      max={6}
      >
      </Random>
    </section>
    <section>
      <Random
      min={1}
      max={100}
      >
      </Random>
    </section>

    <section>
      <ColorBox
      r={255}
      g={0}
      b={0}
      >
      </ColorBox>
    </section>

    <section>
      <ColorBox
      r={128}
      g={255}
      b={0}
      >
      </ColorBox>
    </section>

    <section className='cards'>
      <CreditCard
          type='Visa'
          number='0123456789018845'
          expirationMonth={1}
          expirationYear={2024}
          bank='BBVA'
          owner='Jose'
          bgColor="#11aa99"
          color='white'
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Nino Brown"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Santander"
          owner="Adrew Smith"
          bgColor="#ddbb55"
          color="white" />
    </section>
  </main>)
    
  
}

export default App;
