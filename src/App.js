import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Title from './components/Title/Title';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import FaceBook from './components/FaceBook/FaceBook';

function App() {
  return (
    <div className="App">
      <div>
        <Title title="IdCard" />
        <div>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </div>

      <div>
        <Title title="Greetings" />
        <div className="iteration-container">
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
      </div>

      <div>
        <Title title="Random" />
        <div className="iteration-container">
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
      </div>

      <div>
        <Title title="BoxColor" />
        <div className="iteration-container">
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="CreditCard" />
        </div>
        <div className="credit-cards-container">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />

          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />

          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="CreditCard" />
        </div>
        <div>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="DriverCard" />
        </div>
        <div>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="LikeButton" />
        </div>
        <div>
          <LikeButton /> <LikeButton />
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="ClickablePicture" />
        </div>
        <div>
          <ClickablePicture
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png"
          />
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="Dice" />
        </div>
        <div>
          <Dice />
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="Carousel" />
        </div>
        <div>
          <Carousel
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg',
            ]}
          />
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="NumbersTable" />
        </div>
        <div>
          <NumbersTable limit={12} />
        </div>
      </div>

      <div className="iteration-container">
        <div>
          <Title title="FaceBook" />
        </div>
        <div>
          <FaceBook />
        </div>
      </div>
    </div>
  );
}

export default App;
