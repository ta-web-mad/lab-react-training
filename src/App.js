import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';

function App() {
  return (
    <div className="App">

      {/* TODO Averiguar como poner la fecha */}
        <IdCard lastName='Doe' firstName="John" gender="male" height='1,78m' birth="1992-07-14" picture="https://randomuser.me/api/portraits/men/44.jpg"/>
        <IdCard lastName='Delores' firstName="Obrien" gender="female" height='1,72m' birth="1988-05-11" picture="https://randomuser.me/api/portraits/women/44.jpg" />

    </div>
  );
}

export default App;
