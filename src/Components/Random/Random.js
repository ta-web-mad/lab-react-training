import React from 'react'

function Random({ min, max }) {
  let randomNumber = Math.random() * (max - min) + min;
  return (
    <div className="withborder">
      <p>
        Random Value between {min} and {max} =&#62; {randomNumber}

      </p>
    </div>
  )
}

export default Random
