import React from 'react';

import './App.css';
import IdCard from './Components/IdCard/IdCard';
import Greetings from './Components/Greetings/Greetings';
import Random from './Components/Random/Random';
import BoxColor from './Components/BoxColor/BoxColor';
import CreditCard from './Components/CreditCard/CreditCard';
import Rating from './Components/Rating/Rating'
import DriverCard from './Components/DriverCard/DriverCard';
import LikeButton from './Components/LikeButton/LikeButton';

function App() {
  return (
    <div className="App">
      <div className="personContainer">
      //Passing personInfo in a Single object to Support the data/berlin.json  more easier instead of passing each detail in separate prop.
        All Stylingare done not 100%accurate  butan aproximation
        <IdCard
          personInfo={{
            firstName: "John",
            lastName: "Doe",
            gender: "male",
            height: 178,
            img: "https://randomuser.me/api/portraits/men/44.jpg",
            birth: new Date("1992-07-14"),
          }} />
        <IdCard
          personInfo={{
            lastName: 'Delores ',
            firstName: 'Obrien',
            gender: 'female',
            height: 172,
            birth: new Date("1988-05-11"),
            img: "https://randomuser.me/api/portraits/women/44.jpg"
          }}
        />
      </div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <div className="credits">
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
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
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
      <div className="flex">

        <LikeButton />
        <LikeButton />
      </div>

    </div>
  );
}

export default App;
