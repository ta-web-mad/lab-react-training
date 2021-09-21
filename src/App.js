import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';


function App() {

  const birth = new Date("1988-05-11")
  return (
    <div>
    <section className="IdCard-container">
      <IdCard
        lastName='Dolores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={birth.toLocaleString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"/>
    </section>

    <div className= "Greeting-container">
      <Greetings lang = "de" children="Ludwig"/>
    </div>

    <div className= "Random-container">
      <Random max={100} min={1}/>
    </div>
   
    <div>
      <BoxColor r={255} g={0} b={0}/>
    </div>
    <div>
      <BoxColor r={128} g={255} b={0}/>
    </div>
    <section className="CreditCard-container">
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
    </section>

    </div>
  );  
}

export default App;
