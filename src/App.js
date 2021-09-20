import React from 'react';
import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import NumbersTable from './components/NumbersTable';

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

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

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
      
      <div className='rating_container'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <hr />
      <div className='drivers_container'>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />
        </div>

        <hr />

        <LikeButton />
        <LikeButton />

        <hr />

        {/* <NumbersTable limit={12} /> */}

    </div>
    
  )

}

export default App;
