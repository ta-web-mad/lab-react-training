import React from 'react';
import logo from '../logo.svg';
import './App.css';
import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'
import Rating from './Rating'

const fecha1 = new Date("1992-07-14")
fecha1.toLocaleString('en-GB', { timeZone: 'UTC' })
const fecha2 = new Date("1988-05-11")
fecha2.toLocaleString('en-GB', { timeZone: 'UTC' })

function App() {
  return (
    <div className="App">
      
      {/* // Iteracion 1 */}
    <h1 className='idTitle' >IdCard</h1>
      <div>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={fecha1.toLocaleString('en-GB', { timeZone: 'UTC' })}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={fecha2.toLocaleString('en-GB', { timeZone: 'UTC' })}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

        {/* // Iteracion 2 */}
      <h1 className='greetingsTitle' >Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

        {/* // Iteracion 3 */}
      <h1 className='randomTitle' >Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

        {/* // Iteracion 4 */}
      <h1 className='boxColorTitle' >BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

        {/* // Iteracion 5 */}
      <h1 className='creditCardTitle' >CreditCard</h1>
      <section>
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
      
      {/* // Iteracion 6 */}
    <h1 className='ratingTitle'>Rating</h1>
        <Rating>0</Rating>
        <br />
        <Rating>1.49</Rating>
        <br />
        <Rating>1.5</Rating>
        <br />
        <Rating>3</Rating>
        <br />
        <Rating>4</Rating>
        <br />
        <Rating>5</Rating>
        

    </div>
  );
}

export default App;
