import React from 'react';
import './App.css';
import IdCard from './Idcard'
// import Greetings from './Greetings'
// import BoxColor from './Boxcolor'

const App = () => {

  return (

    <main>
      <section >

        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth="1992-07-14"
        />
        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
        />
      </section>
      {/* <section>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </section> */}
      {/* <section>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section> */}

    </main>
  )
}


export default App;
