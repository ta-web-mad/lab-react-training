import './App.css'
import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'
import Rating from './Rating'

function App() {

  const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }


  return (
    <>

      <h1>IdCard</h1>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={(new Date("1992-07-14")).toLocaleDateString('en-US', DATE_OPTIONS)}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={(new Date("1988-05-11")).toLocaleDateString('en-US', DATE_OPTIONS)}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>

      <Greetings lang="de" children="Hallo Ludwig" />
      <Greetings lang="en" children="Hi English" />
      <Greetings lang="es" children="Hola español" />
      <Greetings lang="fr" children="Bonjour François" />

      <h1>Random</h1>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreditCard</h1>

      <div class='container'>
        <div class='row'>

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
      </div>

      <h1>Ratings</h1>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>



    </>
  )
}

export default App
