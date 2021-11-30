import React from 'react';
import './App.css';
import IdCard  from './Components/IdCard/IdCard';
import './Components/IdCard/IdCard.css'
import Greetings from './Components/Greetings/Greetings'
import './Components/Greetings/Greetings.css'
import Random from './Components/Random/Random'
import './Components/Random/Random.css'
import BoxColor from './Components/BoxColor/BoxColor'
import './Components/BoxColor/BoxColor.css'
import CreditCard from './Components/CreditCard/CreditCard'
import './Components/CreditCard/CreditCard.css'
import Rating from './Components/Rating/Rating'
import './Components/Rating/Rating.css'
import DriverCard from './Components/DriverCard/DriverCard'
import './Components/DriverCard/DriverCard.css'


function App() {
  return (
    <>
    <div className="IdCard">
    <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />

    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
    </div>

    <div className="box-greetings">
    <Greetings lang="es">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    </div>
    
    <Random />

    <BoxColor r={300} g={33} b={22} />
    <BoxColor r={132} g={255} b={0} />

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
        bank="Santander Rio"
        owner="Manue Pascual"
        bgColor="#ddbb55"
        color="white" />

    <Rating>0</Rating>
    <Rating>1.49</Rating>
    <Rating>1.5</Rating>
    <Rating>3.9</Rating>
    <Rating>2.5</Rating>
    <Rating>4.7</Rating>

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
    




    </>



  );
}

export default App;
