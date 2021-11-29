import React from 'react'
import '../css/random.css'


const Random = (props) => {
    let random1 = Math.floor(Math.random() * 6) + 1
    let random2 = Math.floor(Math.random() * 100) + 1

  return (
    <>
        <div className="random-cont">
            <p> {`Random value between 1 and 6 => ${random1}`}</p>
            <p> {`Random value between 1 and 100 => ${random2}`}</p>
        </div>
    </>
  )
}

export default Random