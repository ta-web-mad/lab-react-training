
import './App.css';

import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard';

function App() {
  return (
    <div className="App">
      <h2>ITERATION 1</h2>
      <IdCard 
              lastName="Doe"
              firstName="John"
              gender="male"
              height={178}
              birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    <section>
        <h1>ITERATION 2</h1>
        <Greetings 
          lang="de"
          children="Hallo Ludwig"
        />
        <Greetings
          lang="fr"
          children="Bonjour François"
        />
    </section>
    <section>
      <h1>ITERATION 3</h1>
      <Random 
        min= {1}
        max= {6}
        />
        <Random
          min={1}
          max={100}
        />
    </section>
    <section>
        <h1>ITERATION 4</h1>
        <BoxColor
          r={236}
          g={79}
          b={79}
          />
        <BoxColor
          r={113}
          g={154}
          b={195}
        />
    </section>
    <section>
        <h1>ITERATION 5</h1>
        <CreditCard 
          type="Visa"
          image="./../Visa.png"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"/>

        <CreditCard
          type="Master Card"
          image="./../mastercard.png"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />

        <CreditCard
          type="Visa"
          image="./../Visa.png"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
    </section>
    <section>
        <h1>ITERATION 6</h1>
        <Rating 
        children={0}
        />
        <Rating
          children={1.49}
        />
        <Rating
          children={1.5}
        />
        <Rating
          children={3}
        />
        <Rating
          children={4}
        />
        <Rating
          children={5}
        />
    </section>
    <section>
        <h1>ITERATION 7</h1>
        <DriverCard 
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}  />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />
    </section>
    </div>
    
  );
}

export default App;
