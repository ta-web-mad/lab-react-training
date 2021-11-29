import React from 'react'
import './Random.css'


const Random = ({min, max}) => {

    return <p className="randombox">{Math.floor(Math.random() * (max - min + 1)) + min} </p>
  }

  export default Random;
