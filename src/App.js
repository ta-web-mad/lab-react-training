// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './card.css'

import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './boxColor'
import CreditCard from './CreditCard'
import Rating from './Rating'
import DriverCard from './DriverCard'

function App() {
  return (

    <div style={{ margin: '10px' }}>


      <div className="id-card">
        <h1>IdCard</h1>

        <IdCard
          firstName="John"
          lastName="Doe"
          gender='male'
          heigth={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />,

        <IdCard
          firstName="Obrien"
          lastName="Delores"
          gender='female'
          heigth={172}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

      </div>

      <>
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">Ludwig</Greetings>



        <h1>Random</h1>

        <Random
          max={50}
        ></Random>
        <Random
          max={5}
        ></Random>


        <h1>BoxColor</h1>

        <BoxColor
          r={25}
          g={220}
          b={255}
        />
        <BoxColor
          r={150}
          g={150}
          b={150}
        />

        <h1>CreditCard</h1>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

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
            bank="CaixaBank"
            owner="Salva Gallego"
            bgColor="#ddbb55"
            color="white" />

        </div>


        <h1>Rating</h1>

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriverCard</h1>

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

    </div>



  )
}

export default App;
