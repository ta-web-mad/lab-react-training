import React from 'react';
import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import CreditCard from './components/CreditCard';

function App() {

  return (
    <div className="App">
      <div className="profile_container">
        <IdCard pictureContainer="picture-container" infoContainer="info-container" containerName="profile-container" firstName="Daniel" lastName="Calvo" gender="Male" birth="1992-07-14" height={178} picture="https://randomuser.me/api/portraits/men/22.jpg"></IdCard>
        <IdCard pictureContainer="picture-container" infoContainer="info-container" containerName="profile-container" firstName="Delores" lastName="Obrien" gender="Female" birth="1995-03-21" height={168} picture="https://randomuser.me/api/portraits/women/22.jpg"></IdCard>
      </div>
      <hr />

      <Greetings lang='de' name="Lüdwig"></Greetings>
      <Greetings lang='es' name='Marcos'></Greetings>

      <hr />

      <Random min={15} max={150} />
      <Random min={1} max={150} />
      <Random min={150} max={500} />
      <Random min={35} max={250} />

      <hr />

      <BoxColor r={200} g={80} b={15} />
      <BoxColor r={20} g={110} b={115} />
      <BoxColor r={200} g={120} b={125} />

      <hr />

      <div className='cards_container'>
      <CreditCard
        type="visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />

        <CreditCard
        type="master"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />

      <CreditCard
        type="visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
      </div>

      <hr />

      
    </div>
    
  )

}

export default App;
