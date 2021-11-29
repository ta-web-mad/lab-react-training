import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import "./Greetings.css"
import "./Random.css"
import BoxColor from './BoxColor';


function App() {
  return (


    <div>

      {/* ITERATION 1 */}
      <IdCard lastName='Doe' firstName="John" gender="male" height='1,78m' birth={new Date("1992-07-14").toDateString()} picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard lastName='Delores' firstName="Obrien" gender="female" height='1,72m' birth={new Date("1988-05-11").toDateString()} picture="https://randomuser.me/api/portraits/women/44.jpg" />


      {/* ITERATION 2 */}
      <div className="languages">
      <Greetings lang="de" children="Ludwig" />
      <Greetings lang="fr" children="François" />
      </div>

      {/* ITERATION 3 */}
      <div className="random">
        <Random min={1} max={6}/>
        <Random min={1} max={100} />
      </div>

      {/* ITERATION 4 */}
      <BoxColor r={255} g={0} b={0}/>
      <BoxColor r={0} g={255} b={0} />



    </div>

  


  );
}

export default App;
