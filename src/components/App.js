import React from 'react'
import './App.css'
import IdCard from "./IdCard"
import Greetings from "./Greetings"
import Random from "./Random"
import BoxColor from "./BoxColor"
import CreditCard from "./CreditCard"
import Rating from "./Rating"
import DriverCard from "./DriverCard"

function App() {

  return (

    <main className="App">

      <section>

        <IdCard
          picture="http://res.cloudinary.com/djyjdargg/image/upload/v1550167284/Ironclass/IH_Jan1939.jpg.jpg"
          firstName="Felix"
          lastName="Grosser"
          gender="Male"
          height="1.78 m"
          birth="May 3 1990"
        />

        <IdCard
          picture="http://res.cloudinary.com/djyjdargg/image/upload/v1550165074/Ironclass/IH_Jan1937.jpg.jpg"
          firstName="Julia"
          lastName="Miller"
          gender="Female"
          height="1.56 m"
          birth="Dec 12 1994"
        />

      </section>

      <br />
      <hr />
      <br />

      <section>

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="en">Bryan</Greetings>
        <Greetings lang="es">Martina</Greetings>
        <Greetings lang="fr">François</Greetings>

      </section>

      <br />
      <hr />
      <br />

      <section>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

      </section>

      <br />
      <hr />
      <br />

      <section>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <BoxColor r={128} g={100} b={190} />

      </section>

      <section class="credit">

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

      </section>

      <br />
      <hr />
      <br />

      <section>

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

      </section>

      <br />
      <hr />
      <br />

      <section>

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

    </main>

  )

}

export default App