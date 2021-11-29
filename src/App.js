import React from 'react';
import './App.css'
import IdCard from './IdCard.js'
import Greetings from './Greetings.js';
// import Random from './Random';
import BoxColor from './BoxColor.js';


function App() {
  return (
    <div>
      {/* INTERACCIÓN 1 */}
      <section className="it1">
        <div>
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        </div>
        <div>
          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </section>

      {/* INTERACCIÓN 2 */}
      <section className="it2">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        {/* <Greetings lang="es">Manolo</Greetings> */}

        {/* INTERACCIÓN 3 */}
      </section>
      <section className="it3">
        {/* <Random min={1} max={6} />
        <Random min={1} max={100} />
 */}
      </section>

      {/* INTERACIÓN 4 */}
      <section classname='it4'>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>
    </div>
  );
}

export default App;
