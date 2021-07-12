import React from 'react'
import './App.css'
import Random from './Random'
import Greetings from './Greetings'
import IdCard from './IdCard'

function App() {
  return (
    <>
      <div>
        <h1>IdCard</h1>

        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

      </div>


      <h1>Greetings</h1>
      <Greetings lang='fr'> François</Greetings>
      <Greetings lang='de'> Ludwig</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

    </>

  )
}

export default App;
