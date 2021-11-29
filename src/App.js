import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard/IdCard'
import Greetings from './Components/Greetings/Greetings'
import Random from './Components/Random/Random'
import BoxColor from './Components/BoxColor/BoxColor';
import CreditCard from './Components/CreditCard/CreditCard';
import Rating from './Components/Rating/Rating';
import DriverCard from './Components/DriverCard/DriverCard';
import LikeButton from './Components/LikeButton/LikeButton';
import ClickablePicture from './Components/ClickablePicture/ClickablePicture';
import img from './img/persons/maxence.png'
import img2 from './img/persons/maxence-glasses.png'

function App() {
  return (
    <>
      <div>
        <IdCard firstName='John' lastName='Doe' gender='male' height='1.78' date={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg"></IdCard> 
        <IdCard firstName='Dolores' lastName='Obrien' gender='female' height='1.72' date={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg"></IdCard> 
      </div>


      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>


      <div>
        <Random min={1} max={6}></Random>
        <Random min={1} max={100}></Random>
      </div>


      <div>
        <BoxColor r={76} g={0} b={255}></BoxColor>
        <BoxColor r={0} g={255} b={192}></BoxColor>
      </div>


      <div>
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


      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>


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

      {/* <div>
        <ClickablePicture img={img} img2={img2}></ClickablePicture>
      </div> */}

    </>
  );
}

export default App;
