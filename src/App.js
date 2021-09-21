import React from 'react';
import './App.css';    
import IdCard from './IdCard' 
import Greetings  from './Greeting';
import Random from './Random';  
import BoxColor from './BoxColor'; 
import CreditCards from './CreditCard'; 
import Rating from './Rating'; 
import DriverCard from './DriverCard'; 
import ClickablePicture from './ClickablePicture'
function App() {
  return (
    <div className="App">
        <div className="container">
        <IdCard  
          lastName="Doe"
          firstName = "John" 
          gender = 'male' 
          height = {178} 
          birth={new Date("1992-07-14")} 
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard lastName="Dolores"
          firstName="Obrien"
          gender='female'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        /> 
        </div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings> 
      <Random min={1} max={6} />
      <Random min={1} max={100} />  
    
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} /> 
  
      <section className="row cards">
      <CreditCards
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCards
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCards
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" /> 
        </section> 
        <section className="card-rating">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        </section> 
      <section className = "DriveCard">
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
      </section>  
      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />
    </div>
  );
}

export default App;
 