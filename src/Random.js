import React from 'react'
import './Random.css'

const Random = (props) => {

  return (
    <article className="random">
         <p>Random value between {props.min} and {props.max} = {Math.round(Math.random() * (props.max - props.min)) + props.min}</p>
    </article>
  )
}

export default Random;