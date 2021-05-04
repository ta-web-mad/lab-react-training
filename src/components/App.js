import React from 'react';
import './App.css';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Greetings from './Greetings';
import IdCard from './IdCard';
import Random from './Random';

const App = () => {
  return (

    <main>

      <section>

        <h1>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth='1992-07-14'
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth='1988-05-11'
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

      </section>

      <section>

        <h1>Greetings</h1>
        <Greetings
          lang='es'
          children='Hola Luís'
        />
        <Greetings
          lang='en'
          children='Hello Francis'
        />

      </section>

      <section>

        <Random />

      </section>

      <section>

        <BoxColor
          r={255}
          g={0}
          b={0}
        />

      </section>

      <section>

        <BoxColor
          r={128}
          g={255}
          b={0}
        />

      </section>

      <section className='cards'>

        <CreditCard
          type='Visa'
          number='0123456789018845'
          expirationMonth={1}
          expirationYear={2024}
          bank='Bankia'
          owner='David'
          bgColor="#11aa99"
          color='white'
        />

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



    </main>

  )
}

export default App