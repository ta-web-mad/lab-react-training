import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
// import Greetings from './Greetings';

function App() {
  return (


    <div>

      {/* TODO Averiguar como poner la fecha */}
      <IdCard lastName='Doe' firstName="John" gender="male" height='1,78m' birth={new Date("1992-07-14").toDateString()} picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard lastName='Delores' firstName="Obrien" gender="female" height='1,72m' birth={new Date("1988-05-11").toDateString()} picture="https://randomuser.me/api/portraits/women/44.jpg" />


      
      {/* <Greetings lang="de" children="Ludwig" />
      <Greetings lang="fr" children="François" /> */}







    </div>

  


  );
}

export default App;
