
import './App.css';

import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';

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
    </div>
    
  );
}

export default App;
