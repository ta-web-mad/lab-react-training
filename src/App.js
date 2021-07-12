import React from 'react'
import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'

function App() {
  return (
    <>
    <h1>IdCard</h1>
      <IdCard 
        firstName='john'
        lastName='doe'
        gender='male'
        height='1.78'
        birth='1992-07-14'
        image='https://randomuser.me/api/portraits/men/44.jpg'
      />

      <IdCard
        firstName='Delores'
        lastName='Obrien'
        gender='female'
        height='1.72'
        birth='1988-05-11'
        image='https://randomuser.me/api/portraits/women/44.jpg'
      />

      <h1>Greetings</h1>

      <Greetings lang='de' text='Ludwig'></Greetings>
      <Greetings lang='fr' text='François'> </Greetings>

      <h1>Random</h1>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>Box Color</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </>
  )
}

export default App
