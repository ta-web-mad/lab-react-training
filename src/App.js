import React from 'react';
import './App.css';
import IdCard from "./IdCard.js"
import './card.css';
import Greetings from "./Greetings.js"
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './card.js';
import Rating from "./Rating"



function App() {

  return (
    <>
      <h1>Hello Javier</h1>

      <IdCard
        lastName='Ceballos'
        firstName='Javier'
        gender='Male'
        height='1.88'
        birth={(new Date('1992-07-14')).toLocaleDateString('en-US', dateFormat)}
        picture="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv"
      />

      <hr></hr>

      <Greetings

        lang="Kaixo"
        children="Mona"
      />
      <hr></hr>

      <Random

        min="0"
        max="5"

      />
      <hr></hr>

      <BoxColor

        r={randomColor1}
        g={randomColor2}
        b={randomColor3}
      />

      <hr></hr>

      <CreditCard
        
        type="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/1024px-Visa_2014_logo_detail.svg.png"
        number="0123456789018845"
        expirationMonth="3"
        expirationYear="2021"
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <hr>
      </hr>
      <br>
      </br>
      <Rating

        children={ratingNum}
        />

    </>
  );

  
}


const ratingNum = ((Math.floor(Math.random() * (500 - 0)) + 0)/100)

const dateFormat = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
const randomColor1 = Math.floor(Math.random() * (255 - 0)) + 0
const randomColor2 = Math.floor(Math.random() * (255 - 0)) + 0
const randomColor3 = Math.floor(Math.random() * (255 - 0)) + 0
export default App

